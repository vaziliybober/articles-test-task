import axios from 'axios'

const getArticles = async () => {
  const { data } = await axios.get('/api/article')

  return data.data
}

const postArticle = async (articleData) => {
  const { data } = await axios.post('/api/article', articleData)
  return data
}

const getArticle = async (id) => {
  const { data } = await axios.get(`/api/article/${id}`)
  return data
}

const api = {
  getArticles,
  postArticle,
  getArticle,
}

export default api
