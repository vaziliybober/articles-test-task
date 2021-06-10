import React from 'react'
import styled from '@emotion/styled'
import { useParams, useLocation } from 'react-router-dom'

import { Spinner } from 'theme-ui'

import { formatDate } from '../../shared'

import useArticle from '../../hooks/useArticle'

export default function ArticlePage() {
  const { id } = useParams()
  const { state } = useLocation()
  const { article, status, error } = useArticle(id)

  return (
    <Container>
      <Header>
        <Title>{article?.title || state?.title}</Title>
        <DateComponent>
          <div>
            {(article && formatDate(article.date)) ||
              (state && formatDate(state.date))}
          </div>
        </DateComponent>
      </Header>
      <Body>
        {status === 'loading' ? (
          <Spinner />
        ) : status === 'error' ? (
          <div>{error}</div>
        ) : (
          article && <ArticleText>{article.text}</ArticleText>
        )}
      </Body>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
`

const Header = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 30px 60px;
`

const Title = styled.h1`
  margin: 10px 0;

  font-weight: lighter;
  color: ${({ theme }) => theme.colors.textAccent};
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.heading};
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
`

const DateComponent = styled.div`
  margin: 10px 0;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 20px 20px 20px 20px;
`

const ArticleText = styled.p`
  max-width: 1000px;

  font-size: 18px;
`
