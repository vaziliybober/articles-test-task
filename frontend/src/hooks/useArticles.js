import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'

import { actions } from '../slices'

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
    dispatch(actions.fetchArticlesRequested({ limit, offset }))
  }, [limit, offset])

  const { articles, total, status, error } = useSelector(selector)

  return { articles, total, status, error }
}
