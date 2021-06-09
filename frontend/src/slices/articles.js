import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'articles',
  initialState: {
    byId: {},
    allIds: [],
    total: 0,
    status: 'idle',
    error: null,
  },
  reducers: {
    fetchArticlesRequested: (state) => {
      state.status = 'loading'
    },
    fetchArticlesSucceeded: (state, { payload }) => {
      const { articles, total } = payload
      state.byId = Object.fromEntries(articles.map((a) => [a.id, a]))
      state.allIds = articles.map((a) => a.id)
      state.total = total
      state.status = 'success'
    },
    fetchArticlesFailed: (state, { payload }) => {
      const { error } = payload
      state.status = 'error'
      state.error = error
    },
  },
})

export const { actions } = slice
export default slice.reducer
