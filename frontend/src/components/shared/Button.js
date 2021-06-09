import React from 'react'
import styled from '@emotion/styled'

function BasicButton({ type = 'button', ...props }) {
  return <button type={type} {...props} />
}

const Button = styled(BasicButton)`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.highlight};

  font-size: 16px;
  white-space: nowrap;
  padding: 0.8em 2em;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.text};
  border-style: solid;
  border-radius: 5px;

  &:hover {
    filter: brightness(130%);
  }

  &:disabled,
  &:active {
    filter: brightness(80%);
  }
`

export default Button
