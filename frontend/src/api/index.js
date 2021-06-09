import axios from 'axios'

const getArticles = async () => {
  const { data } = await axios.get('/api/article')
  const { data: articles, total } = data
  return { articles, total }
}

const api = {
  getArticles,
}

export default api
