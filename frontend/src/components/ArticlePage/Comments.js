import React from 'react'
import styled from '@emotion/styled'

import { Spinner } from 'theme-ui'

import Comment from './Comment'
import NewCommentForm from './NewCommentForm'

import useComments from '../../hooks/useComments'

export default function Comments({ articleId }) {
  const { comments, status, error } = useComments(articleId)

  return (
    <Container>
      {status === 'loading' ? (
        <Spinner />
      ) : status === 'error' ? (
        <div>{error}</div>
      ) : comments.length === 0 ? (
        <div>Комментарии отсутствуют</div>
      ) : (
        <>
          <NewCommentForm />
          <CommentsWrapper>
            {comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </CommentsWrapper>
        </>
      )}
    </Container>
  )
}

const Container = styled.div``

const CommentsWrapper = styled.div``
