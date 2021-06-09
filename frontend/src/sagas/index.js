import { call, put, takeLatest } from 'redux-saga/effects'

import api from '../api'
import { actions } from '../slices'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

function* fetchArticles({ payload }) {
  try {
    yield delay(400)
    const { articles, total } = yield call(api.getArticles)
    yield put(actions.fetchArticlesSucceeded({ articles, total }))
  } catch (e) {
    yield put(actions.fetchArticlesFailed({ error: e.message }))
  }
}

// function* mySaga() {
//   yield takeEvery(actions.fetchArticlesRequested, fetchArticles)
// }

function* mySaga() {
  yield takeLatest(actions.fetchArticlesRequested, fetchArticles)
}

export default mySaga
