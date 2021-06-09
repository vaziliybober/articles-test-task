import React from 'react'
import styled from '@emotion/styled'
import { Spinner } from 'theme-ui'

import { getArticles } from '../../api'

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
      <Heading>Articles</Heading>
      <ArticlesContainer>
        {status === 'loading' ? (
          <Spinner />
        ) : status === 'error' ? (
          <div>{error.message}</div>
        ) : (
          articles.map((article) => <Article article={article}></Article>)
        )}
      </ArticlesContainer>
      <StyledPaginator
        current={pageIndex}
        total={total / ARTICLES_PER_PAGE}
        shown={2}
        onChange={handlePaginatorChange}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  padding: 10px 20px;
`

const Heading = styled.h1`
  margin-left: 20px;
  margin-bottom: 40px;
`

const ArticlesContainer = styled.div`
  margin-bottom: 20px;
`

const StyledPaginator = styled(Paginator)`
  margin-top: auto;
`
