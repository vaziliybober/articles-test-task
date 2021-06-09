import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'

import { actions } from '../slices'

const getDayAfter = (date) => {
  const dayAfter = new Date(date)
  dayAfter.setDate(date.getDate() + 1)
  console.log(dayAfter)
  return dayAfter
}

const selector = createSelector(
  (state) => state.articles,
  ({ byId, allIds, ...rest }) => ({
    articles: allIds.map((id) => byId[id]),
    total: allIds.length,
    ...rest,
  })
)

export default function useArticles(
  limit,
  offset,
  searchValue,
  startDate,
  endDate
) {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(actions.fetchArticlesRequested())
  }, [dispatch])

  const data = useSelector(selector)
  const filteredArticles = data.articles
    .filter((article) => !startDate || new Date(article.date) >= startDate)
    .filter(
      (article) => !endDate || new Date(article.date) <= getDayAfter(endDate)
    )
    .filter((article) =>
      article.title.toLowerCase().includes(searchValue.toLowerCase())
    )
  const total = filteredArticles.length
  const articles = filteredArticles.slice(offset, offset + limit)

  return { ...data, articles, total }
}
