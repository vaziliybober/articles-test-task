import React from 'react'
import styled from '@emotion/styled'
import { Spinner } from 'theme-ui'

import { getArticles } from '../../api'

import Article from './Article'
import Paginator from '../shared/Paginator'

const ARTICLES_PER_PAGE = 2

export default function HomePage() {
  const [articles, setArticles] = React.useState()
  const [total, setTotal] = React.useState()
  const [pageIndex, setPageIndex] = React.useState(0)

  const fetch = async (limit, offset) => {
    const data = await getArticles(limit, offset)
    setArticles(data.articles)
    setTotal(data.total)
    if (pageIndex >= total) {
      setPageIndex(total - 1)
    }
  }

  React.useEffect(() => {
    fetch(ARTICLES_PER_PAGE, 0)
  }, [])

  const handlePaginatorChange = async (newPageIndex) => {
    await fetch(ARTICLES_PER_PAGE, newPageIndex * ARTICLES_PER_PAGE)
    setPageIndex(newPageIndex)
  }

  return (
    <Container>
      <Heading>Articles</Heading>
      {!articles ? (
        <Spinner />
      ) : (
        <>
          <ArticlesContainer>
            {articles.map((article) => (
              <Article article={article}></Article>
            ))}
          </ArticlesContainer>
          <StyledPaginator
            current={pageIndex}
            total={total / ARTICLES_PER_PAGE}
            shown={2}
            onChange={handlePaginatorChange}
          />
        </>
      )}
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
