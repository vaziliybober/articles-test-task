import React from 'react'

import { getArticles } from '../api'

export default function HomePage() {
  const [articles, setArticles] = React.useState()
  React.useEffect(() => {
    const fetch = async () => {
      const fetchedArticles = await getArticles(2, 1)
      setArticles(fetchedArticles)
    }

    fetch()
  }, [])
  return (
    <div>
      <h2>Articles</h2>
      <div>{JSON.stringify(articles, null, 2)}</div>
    </div>
  )
}
