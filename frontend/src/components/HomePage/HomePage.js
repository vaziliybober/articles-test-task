import React from 'react'
import styled from '@emotion/styled'

import { Spinner } from 'theme-ui'
import UnstyledButton from '../shared/Button'
import UnstyledSearch from '../shared/Search'
import DatePicker from '../shared/DatePicker'

import Article from './Article'
import Paginator from '../shared/Paginator'

import useArticles from '../../hooks/useArticles'

const ARTICLES_PER_PAGE = 6

export default function HomePage() {
  const [pageIndex, setPageIndex] = React.useState(0)

  const [searchValue, setSearchValue] = React.useState('')

  const [startDate, setStartDate] = React.useState()
  const [endDate, setEndDate] = React.useState()

  const { articles, total, status, error } = useArticles(
    ARTICLES_PER_PAGE,
    pageIndex * ARTICLES_PER_PAGE,
    searchValue,
    startDate,
    endDate
  )

  const totalPages = Math.ceil(total / ARTICLES_PER_PAGE)

  React.useEffect(() => {
    if (pageIndex >= totalPages) {
      setPageIndex(Math.max(0, totalPages - 1))
    }
  }, [totalPages])

  return (
    <Container>
      <Header>
        <Title>Статьи</Title>
        <Button>Создать статью</Button>

        <Search
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Найти статью..."
        />
      </Header>
      <Body>
        <DatePicker
          text="Фильторвать по дате:"
          startDate={startDate}
          endDate={endDate}
          onChangeStartDate={setStartDate}
          onChangeEndDate={setEndDate}
        />
        <ArticlesContainer>
          {status === 'loading' ? (
            <Spinner />
          ) : status === 'error' ? (
            <div>{`Error: ${error}`}</div>
          ) : articles.length === 0 ? (
            <div>Статей не найдено</div>
          ) : (
            articles.map((article) => (
              <Article article={article} key={article.id}></Article>
            ))
          )}
        </ArticlesContainer>
      </Body>
      <Footer>
        {status === 'success' && totalPages > 0 && (
          <Paginator
            current={pageIndex}
            total={totalPages}
            shown={2}
            onChange={setPageIndex}
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
