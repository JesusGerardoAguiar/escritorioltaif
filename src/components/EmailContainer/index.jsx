import React, { useCallback } from "react"
import { Box, Button, FormContainer, ButtonDiv } from "./style"
import Input from "./Input"
import InputArea from "./InputArea"
import { Formik } from "formik"
import * as Yup from "yup"

const EmailContainer = () => {
  const onSubmit = useCallback(values => {
    console.log(values)
  }, [])
  return (
    <Box>
      <Formik
        initialValues={{ email: "", name: "", consult: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required(),
          consult: Yup.string().required(),
        })}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleSubmit, errors, isSubmitting, values }) => {
          return (
            <FormContainer
            action="https://formspree.io/info@decorartamoblamientos.com"
            method="POST">
              <Input
                placeholder="Nombre / Empresa"
                name="name"
                field={values.name}
                setField={handleChange}
              />
              <Input
                placeholder="Email"
                name="email"
                field={values.email}
                setField={handleChange}
              />
              <InputArea
                placeholder="Consulta"
                name="consult"
                field={values.consult}
                setField={handleChange}
              />
              <ButtonDiv>
                <Button type="submit">Enviar Consulta</Button>
              </ButtonDiv>
            </FormContainer>
          )
        }}
      </Formik>
    </Box>
  )
}

export default EmailContainer
