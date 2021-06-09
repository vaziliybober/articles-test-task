import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'

import { actions } from '../slices'
import { getArticles } from '../api'

const selector = createSelector(
  (state) => state.articles,
  ({ byId, allIds, ...rest }) => ({
    articles: allIds.map((id) => byId[id]),
    ...rest,
  })
)

export default (limit, offset) => {
  const dispatch = useDispatch()

  React.useEffect(async () => {
    dispatch(actions.fetchArticlesRequested())
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const { articles, total } = await getArticles(limit, offset)
      dispatch(actions.fetchArticlesSucceeded({ articles, total }))
    } catch (error) {
      dispatch(actions.fetchArticlesFailed({ error }))
    }
  }, [limit, offset])

  const { articles, total, status, error } = useSelector(selector)

  return { articles, total, status, error }
}
