import React from 'react'
import styled from '@emotion/styled'

const formatDate = (dateString) => {
  const date = new Date(dateString)

  return date.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}

export default function Article({ article, className }) {
  return (
    <Container className={className}>
      <Title>{article.title}</Title>
      <div>{formatDate(article.date)}</div>
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const Title = styled.h2`
  margin-bottom: 10px;

  font-size: 20px;
`
