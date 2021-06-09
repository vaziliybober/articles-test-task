import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'

import { actions } from '../slices'

export default function useArticles(limit, offset) {
  const dispatch = useDispatch()

  const selector = React.useMemo(
    () =>
      createSelector(
        (state) => state.articles,
        ({ byId, allIds, ...rest }) => ({
          articles: allIds.slice(offset, offset + limit).map((id) => byId[id]),
          total: allIds.length,
          ...rest,
        })
      ),
    [limit, offset]
  )

  React.useEffect(() => {
    dispatch(actions.fetchArticlesRequested())
  }, [dispatch])

  const data = useSelector(selector)

  return data
}
