import React from 'react'
import styled from '@emotion/styled'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import api from '../../api'

import { Spinner as UnstyledSpinner } from 'theme-ui'

import Button from '../shared/Button'
import Textarea from '../shared/Textarea'

import useComments from '../../hooks/useComments'

const schema = Yup.object().shape({
  text: Yup.string().required('Обязательное поле'),
})

export default function NewCommentForm({ articleId }) {
  const { addComment } = useComments(articleId)

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const comment = await api.postComment(articleId, {
      ...values,
      user: 'Anonymous',
    })
    console.log(comment)
    addComment(comment)
    setSubmitting(false)
    resetForm()
  }

  return (
    <Container>
      <Formik
        initialValues={{ text: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnChange={true}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <FieldContainer>
              <Label>Добавить комментарий: </Label>
              <Field name="text" as={TextTextarea} />
              <ErrorMessage show={touched.text && errors.text}>
                {errors.text || 'invisible text'}
              </ErrorMessage>
            </FieldContainer>
            <SubmitContainer>
              <SubmitButton type="submit" disabled={isSubmitting}>
                Отправить
              </SubmitButton>
              {isSubmitting && <Spinner />}
            </SubmitContainer>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

const Container = styled.div`
  width: 800px;
`

const FieldContainer = styled.div``

const Label = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
`

const TextTextarea = styled(Textarea)`
  height: 100px;
  width: 85vw;
  max-width: 700px;
  margin-bottom: 5px;
  margin-right: 10px;

  font-size: 18px;
`

const SubmitButton = styled(Button)`
  margin-right: 15px;
`

const ErrorMessage = styled.div`
  content: 'sdf';
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  color: red;
`

const Spinner = styled(UnstyledSpinner)`
  width: 40px;
  height: 40px;
`

const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`