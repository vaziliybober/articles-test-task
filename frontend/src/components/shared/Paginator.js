import React from 'react'
import styled from '@emotion/styled'

const getRange = (startIndex, length) => {
  return [...Array(length).keys()].map((i) => i + startIndex)
}

const getPageRange = (current, total, shown) => {
  if (shown > total) {
    return getRange(0, total)
  }

  if (shown === 1) {
    return getRange(current, 1)
  }

  if (shown === 2) {
    if (total - current < 2) {
      return getRange(total - 2, 2)
    }

    return getRange(current, 2)
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
  onChange,
  total,
  shown = 4,
  className,
}) {
  const pageIndexes = getPageRange(current, total, shown)

  return (
    <Container className={className}>
      <PageNumber
        onClick={() => onChange(Math.max(0, current - 1))}
        disabled={current === 0}
      >
        {'<'}
      </PageNumber>
      {pageIndexes.map((pageIndex) => (
        <PageNumber
          active={pageIndex === current}
          onClick={() => onChange(pageIndex)}
          key={pageIndex}
        >
          {pageIndex + 1}
        </PageNumber>
      ))}
      <PageNumber
        onClick={() => onChange(Math.min(total - 1, current + 1))}
        disabled={current === total - 1}
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

  filter: ${({ disabled }) => disabled && 'brightness(70%)'};

  &:not(:last-child) {
    margin-right: 10px;
  }
`
