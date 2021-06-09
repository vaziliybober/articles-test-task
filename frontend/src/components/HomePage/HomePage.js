import React from 'react'
import styled from '@emotion/styled'
import { Spinner } from 'theme-ui'

import Article from './Article'
import Paginator from '../shared/Paginator'

import useArticles from '../../hooks/useArticles'

const ARTICLES_PER_PAGE = 2

export default function HomePage() {
  const [pageIndex, setPageIndex] = React.useState(0)
  const { articles, total, status, error } = useArticles(
    ARTICLES_PER_PAGE,
    pageIndex * ARTICLES_PER_PAGE
  )

  const handlePaginatorChange = async (newPageIndex) => {
    setPageIndex(newPageIndex)
  }

  return (
    <Container>
      <Header>
        <Heading>Статьи</Heading>
        <Button>Создать статью</Button>
      </Header>
      <Body>
        <ArticlesContainer>
          {status === 'loading' ? (
            <Spinner />
          ) : status === 'error' ? (
            <div>{`Error: ${error}`}</div>
          ) : (
            articles.map((article) => <Article article={article}></Article>)
          )}
        </ArticlesContainer>
      </Body>
      <Footer>
        <Paginator
          current={pageIndex}
          total={total / ARTICLES_PER_PAGE}
          shown={2}
          onChange={handlePaginatorChange}
        />
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary};
  padding: 30px 60px;
`

const Heading = styled.h1`
  margin-right: 30px;
`

const Button = styled.button`
  padding: 10px 20px;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 60px 20px 20px 20px;
  background: lightgoldenrodyellow;
`

const ArticlesContainer = styled.div`
  margin-bottom: 20px;
`

const Footer = styled.div`
  margin-top: auto;

  padding: 20px;
  background: pink;
`
