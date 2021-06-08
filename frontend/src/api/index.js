import axios from 'axios'

export const getArticles = async (limit, offset) => {
  const { data } = await axios.get('/api/article', {
    params: {
      limit,
      offset,
    },
  })

  return { articles: data.data, total: data.total }
}
