import React from 'react'
import styled from '@emotion/styled'

import { useHistory } from 'react-router-dom'

import UnstyledButton from '../shared/Button'

import { formatDate } from '../../shared'
import useArticles from '../../hooks/useArticles'

export default function Article({ article, className }) {
  const history = useHistory()

  const { removeArticle } = useArticles()

  const handleClick = () => {
    history.push(`/articles/${article.id}`, {
      title: article.title,
      date: article.date,
    })
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
  margin-right: 25px;

  font-size: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 25px;
  max-height: 50px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
`

const Button = styled(UnstyledButton)`
  background: red;
  padding: 5px 10px;
  border-width: 1px;
`
