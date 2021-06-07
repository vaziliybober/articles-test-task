import React from 'react'

import { getArticles } from '../../api'

import Article from './Article'
import Paginator from '../shared/Paginator'

export default function HomePage() {
  const [articles, setArticles] = React.useState()

  React.useEffect(() => {
    const fetch = async () => {
      const fetchedArticles = await getArticles()
      setArticles(fetchedArticles)
    }

    fetch()
  }, [])
  return (
    <div>
      <h2>Articles</h2>
      <div>{articles && articles.map((article) => <Article article={article}></Article>)}</div>
      <Paginator current={1} total={6} />
    </div>
  )
}
