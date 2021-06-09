import React from 'react'
import styled from '@emotion/styled'

export default function Checkbox({ className }) {
  return (
    <Container className={className}>
      <Input type="checkbox" id="filter-checkbox" />
      <Label for="filter-checkbox">По дате</Label>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  border-radius: 5px;
  font-size: 16px;
  padding: 0.8em 2em;
  user-select: none;
`

const Input = styled.input`
  margin-right: 5px;
`

const Label = styled.label``
