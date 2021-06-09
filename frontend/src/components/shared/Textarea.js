import styled from '@emotion/styled'

const Textarea = styled.textarea`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  resize: none;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
  }
`

export default Textarea
