import React from 'react'
import styled from '@emotion/styled'
import { useParams, useLocation } from 'react-router-dom'

import useArticle from '../../hooks/useArticle'

export default function ArticlePage() {
  const { id } = useParams()
  const { state } = useLocation()
  const { article, status, error } = useArticle(id)

  return (
    <Container>
      <Header>
        <Title>{state.title}</Title>
      </Header>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>{error}</div>
      ) : (
        <div>{JSON.stringify(article, null, 2)}</div>
      )}
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
`

const Header = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 30px 0;
`

const Title = styled.h1`
  margin: 10px 60px;

  font-weight: lighter;
  color: ${({ theme }) => theme.colors.textAccent};
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.heading};
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
`
