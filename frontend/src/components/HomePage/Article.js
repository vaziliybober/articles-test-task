import React from 'react'
import styled from '@emotion/styled'

export default function Article({ article, className }) {
  return (
    <Container className={className}>
      <div>{article.id}</div>
      <div>{article.date}</div>
      <div>{article.title}</div>
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`
