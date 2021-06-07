import React from 'react'

export default function Article({ article }) {
  return (
    <div style={{ border: '1px solid black', padding: 10, margin: 10 }}>
      <div>{article.id}</div>
      <div>{article.date}</div>
      <div>{article.title}</div>
    </div>
  )
}
