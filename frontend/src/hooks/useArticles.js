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

export default function useArticles() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(actions.fetchArticlesRequested())
  }, [dispatch])

  const data = useSelector(selector)

  return data
}
