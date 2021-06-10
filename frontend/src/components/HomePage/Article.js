import React from 'react'
import styled from '@emotion/styled'

import { useHistory } from 'react-router-dom'

import UnstyledButton from '../shared/Button'

import useArticles from '../../hooks/useArticles'

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
  const history = useHistory()

  const { removeArticle } = useArticles()

  const handleClick = () => {
    history.push(`/${article.id}`)
  }

  const handleRemove = () => {
    removeArticle(article.id)
  }

  return (
    <Container className={className} onClick={handleClick}>
      <ContentContainer>
        <Title>{article.title}</Title>
        <div>{formatDate(article.date)}</div>
      </ContentContainer>
      <Button
        onClick={(e) => {
          e.stopPropagation()
          handleRemove()
        }}
      >
        Удалить
      </Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const ContentContainer = styled.div``

const Title = styled.h2`
  margin-bottom: 10px;

  font-size: 20px;
`

const Button = styled(UnstyledButton)`
  background: red;
  padding: 5px 10px;
  border-width: 1px;
`
