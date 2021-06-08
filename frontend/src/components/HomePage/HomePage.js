import React from 'react'
import styled from '@emotion/styled'

import { getArticles } from '../../api'

import Article from './Article'
import Paginator from '../shared/Paginator'

export default function HomePage() {
  const [articles, setArticles] = React.useState()
  const [pageIndex, setPageIndex] = React.useState(0)

  React.useEffect(() => {
    const fetch = async () => {
      const fetchedArticles = await getArticles()
      setArticles(fetchedArticles)
    }

    fetch()
  }, [])
  return (
    <Container>
      <Heading>Articles</Heading>
      <ArticlesContainer>
        {articles &&
          articles.map((article) => <Article article={article}></Article>)}
      </ArticlesContainer>
      <StyledPaginator
        current={pageIndex}
        total={12}
        setCurrent={setPageIndex}
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
