import React from 'react'
import styled from '@emotion/styled'

import 'react-datepicker/dist/react-datepicker.css'
import DatePickerComponent, { registerLocale } from 'react-datepicker'
import ru from 'date-fns/locale/ru'
registerLocale('ru', ru)

export default function DatePicker({ text, onChange }) {
  const [startDate, setStartDate] = React.useState()
  const [endDate, setEndDate] = React.useState()

  return (
    <Container>
      <Text>{text}</Text>
      <DateContainer>
        <>
          <DatePickerComponent
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            maxDate={endDate}
            isClearable
            locale="ru"
          />
          —
          <DatePickerComponent
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            minDate={startDate}
            isClearable
            locale="ru"
          />
        </>
      </DateContainer>
    </Container>
  )
}

const Container = styled.div``

const Text = styled.div`
  margin-bottom: 10px;
`

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`
