import { combineReducers } from 'redux'

import articles, { actions as articlesActions } from './articles.js'
import homePage, { actions as homePageActions } from './homePage.js'

export default combineReducers({
  articles,
  homePage,
})

const actions = {
  ...articlesActions,
  ...homePageActions,
}

export { actions }
