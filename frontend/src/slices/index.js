import { combineReducers } from 'redux'

import articles, { actions as articlesActions } from './articles.js'
import homePage, { actions as homePageActions } from './homePage.js'
import article, { actions as articleActions } from './article.js'

export default combineReducers({
  articles,
  homePage,
  article,
})

const actions = {
  ...articlesActions,
  ...homePageActions,
  ...articleActions,
}

export { actions }
