import axios from 'axios'

const getArticles = async () => {
  const { data } = await axios.get('/api/article')
  const { data: articles, total } = data
  return { articles, total }
}

const postArticle = async (articleData) => {
  const { data } = await axios.post('/api/article', articleData)
  return data
}

const api = {
  getArticles,
  postArticle,
}

export default api
