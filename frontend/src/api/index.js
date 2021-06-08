import axios from 'axios'

const FAKE_DELAY = 0

const sleep = () => new Promise((resolve) => setTimeout(resolve, FAKE_DELAY))

export const getArticles = async (limit, offset) => {
  await sleep()
  const { data } = await axios.get('/api/article', {
    params: {
      limit,
      offset,
    },
  })

  return { articles: data.data, total: data.total }
}
