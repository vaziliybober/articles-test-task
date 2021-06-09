import React from 'react'
import styled from '@emotion/styled'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import Button from '../shared/Button'
import Textarea from '../shared/Textarea'

const schema = Yup.object().shape({
  title: Yup.string().required('Required'),
  text: Yup.string().required('Required'),
})

export default function NewArticleForm({ onClose }) {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('submit!', values)
    setSubmitting(false)
  }
  return (
    <Container>
      <Title>Создать статью</Title>
      <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ isSubmitting, errors, touched, isValid, dirty }) => (
          <Form>
            <FieldContainer>
              <Label>Название: </Label>
              <Field name="title" as={NameTextarea} />
              <ErrorMessage show={touched.title && errors.title}>
                {errors.title || 'invisible text'}
              </ErrorMessage>
            </FieldContainer>
            <FieldContainer>
              <Label>Текст: </Label>
              <Field name="text" as={TextTextarea} />
              <ErrorMessage show={touched.text && errors.text}>
                {errors.text || 'invisible text'}
              </ErrorMessage>
            </FieldContainer>

            <Button type="submit" disabled={isSubmitting}>
              Создать
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 800px;
  max-width: 90vw;

  padding: 20px 60px;
  overflow-y: auto;
  max-height: 90vh;

  &:last-child::after {
    content: '';
    display: block;
    height: 20px;
  }
`

const Title = styled.h3`
  margin-bottom: 40px;

  text-align: center;
  font-size: 38px;
`

const FieldContainer = styled.div`
  margin-bottom: 20px;
`

const Label = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
`

const NameTextarea = styled(Textarea)`
  width: 100%;
  height: 70px;

  font-size: 20px;
`

const TextTextarea = styled(Textarea)`
  width: 100%;
  height: 200px;
  margin-bottom: 5px;

  font-size: 18px;
`

const ErrorMessage = styled.div`
  content: 'sdf';
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  color: red;
`
