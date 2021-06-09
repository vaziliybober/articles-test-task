import { combineReducers } from 'redux'

import articles, { actions as articlesActions } from './articles.js'

export default combineReducers({
  articles,
})

const actions = {
  ...articlesActions,
}

export { actions }
