import React from 'react'
import styled from '@emotion/styled'

const getRange = (startIndex, length) => {
  return [...Array(length).keys()].map((i) => i + startIndex)
}

const getPageRange = (current, total, shown) => {
  if (shown > total) {
    return getRange(0, total)
  }

  if (current === 0) {
    return getRange(0, shown)
  }

  if (total - current + 1 < shown) {
    return getRange(total - shown, shown)
  }

  return getRange(current - 1, shown)
}

export default function Paginator({
  current,
  setCurrent,
  total,
  shown = 4,
  className,
}) {
  const pageIndexes = getPageRange(current, total, shown)

  return (
    <Container className={className}>
      <PageNumber onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}>
        {'<'}
      </PageNumber>
      {pageIndexes.map((pageIndex) => (
        <PageNumber
          active={pageIndex === current}
          onClick={() => setCurrent(pageIndex)}
        >
          {pageIndex + 1}
        </PageNumber>
      ))}
      <PageNumber
        onClick={() => setCurrent((prev) => Math.min(total - 1, prev + 1))}
      >
        {'>'}
      </PageNumber>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const PageNumber = styled.div`
  width: 45px;
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px 0;
  text-align: center;
  color: ${({ active, theme }) =>
    active ? theme.colors.background : theme.colors.text};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  user-select: none;

  &:not(:last-child) {
    margin-right: 10px;
  }
`

// {pageIndexes.map((pageIndex) =>
//   pageIndex === current ? (
//     <div style={{ color: 'blue', margin: 10 }}>{pageIndex + 1}</div>
//   ) : (
//     <div style={{ margin: 10 }}>{pageIndex + 1}</div>
//   )
// )}
