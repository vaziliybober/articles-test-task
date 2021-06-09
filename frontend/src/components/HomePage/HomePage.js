import React from 'react'
import styled from '@emotion/styled'
import { Spinner, Checkbox as UnstyledCheckbox } from 'theme-ui'
import Button from '../shared/Button'

import Article from './Article'
import Paginator from '../shared/Paginator'

import useArticles from '../../hooks/useArticles'

const ARTICLES_PER_PAGE = 6

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
        <Title>Статьи</Title>
        <Button>Создать статью</Button>
        <div style={{ marginLeft: 'auto' }}>
          <label for="filter-checkbox">По дате</label>
          <input type="checkbox" id="filter-checkbox" />
        </div>

        <Search />
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
        {status === 'success' && (
          <Paginator
            current={pageIndex}
            total={Math.ceil(total / ARTICLES_PER_PAGE)}
            shown={2}
            onChange={handlePaginatorChange}
          />
        )}
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
  flex-wrap: wrap;
  gap: 20px;
  color: ${({ theme }) => theme.colors.accent};

  background: ${({ theme }) => theme.colors.primary};
  padding: 30px 60px;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textAccent};
  font-size: 55px;
  font-weight: lighter;
  font-family: ${({ theme }) => theme.fonts.heading};
`

const Search = styled.input`
  padding: 5px 10px;
  border-radius: 10px;
`

const Checkbox = styled(UnstyledCheckbox)`
  flex-direction: row;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 60px 20px 20px 20px;
`

const ArticlesContainer = styled.div`
  margin-bottom: 20px;
`

const Footer = styled.div`
  margin-top: auto;

  padding: 20px;
`
