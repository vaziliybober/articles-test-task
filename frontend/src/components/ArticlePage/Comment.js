import React from 'react'
import styled from '@emotion/styled'

export default function Comment({ comment }) {
  return (
    <Container>
      <Username>{comment.user}</Username>
      <CommentText>{comment.text}</CommentText>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 10px;

  background: ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 10px;
`

const Username = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
`

const CommentText = styled.div`
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
`
