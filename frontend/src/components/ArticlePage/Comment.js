import React from 'react'
import styled from '@emotion/styled'

export default function Comment({ comment }) {
  return (
    <Container>
      <Username>{comment.user}</Username>
      <div>{comment.text}</div>
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
`
