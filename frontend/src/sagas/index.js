import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from '../api'
import { actions } from '../slices'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

function* fetchArticles() {
  try {
    yield delay(400)
    const articles = yield call(api.getArticles)
    yield put(actions.fetchArticlesSucceeded({ articles }))
  } catch (e) {
    yield put(actions.fetchArticlesFailed({ error: e.message }))
  }
}

function* fetchArticle({ payload }) {
  const { id } = payload
  try {
    yield delay(400)
    const article = yield call(api.getArticle, id)
    console.log(article)
    yield put(actions.fetchArticleSucceeded({ article }))
  } catch (e) {
    yield put(actions.fetchArticleFailed({ error: e.message }))
  }
}

function* watchFetchArticles() {
  yield takeLatest(actions.fetchArticlesRequested, fetchArticles)
}

function* watchFetchArticle() {
  yield takeLatest(actions.fetchArticleRequested, fetchArticle)
}

export default function* rootSaga() {
  yield all([watchFetchArticles(), watchFetchArticle()])
}
