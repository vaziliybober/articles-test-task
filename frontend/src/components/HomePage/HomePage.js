import React from 'react'
import styled from '@emotion/styled'
import { Spinner, Checkbox as UnstyledCheckbox } from 'theme-ui'
import UnstyledButton from '../shared/Button'
import Checkbox from '../shared/Checkbox'
import UnstyledSearch from '../shared/Search'

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

        <Search placeholder="Найти статью..." />
      </Header>
      <Body>
        <Checkbox>По дате</Checkbox>
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

  background: ${({ theme }) => theme.colors.primary};
  padding: 30px 0;
`

const Title = styled.h1`
  margin: 10px 10px 10px 60px;

  color: ${({ theme }) => theme.colors.textAccent};
  font-size: 55px;
  font-weight: lighter;
  font-family: ${({ theme }) => theme.fonts.heading};
`

const Button = styled(UnstyledButton)`
  margin: 10px 10px 10px 60px;
`

const Search = styled(UnstyledSearch)`
  margin: 10px 20px 10px 60px;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 20px 20px 20px 20px;
`

const ArticlesContainer = styled.div`
  margin: 30px 0;
`

const Footer = styled.div`
  margin-top: auto;

  padding: 20px;
`
