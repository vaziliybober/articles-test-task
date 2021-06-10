import React from 'react'
import styled from '@emotion/styled'

import { Spinner } from 'theme-ui'

import Comment from './Comment'

import useComments from '../../hooks/useComments'

export default function Comments({ articleId }) {
  const { comments, status, error } = useComments(articleId)

  return (
    <Container>
      {status === 'loading' ? (
        <Spinner />
      ) : status === 'error' ? (
        <div>{error}</div>
      ) : (
        <CommentsWrapper>
          {comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </CommentsWrapper>
      )}
    </Container>
  )
}

const Container = styled.div``

const CommentsWrapper = styled.div``
