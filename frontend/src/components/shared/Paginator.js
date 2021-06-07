import React from 'react'

export default function Paginator({ current, setCurrent, total }) {
  const pageIndexes = Array.from(Array(total).keys())

  return (
    <div style={{ display: 'flex' }}>
      {pageIndexes.map((pageIndex) =>
        pageIndex === current ? (
          <div style={{ color: 'blue', margin: 10 }}>{pageIndex + 1}</div>
        ) : (
          <div style={{ margin: 10 }}>{pageIndex + 1}</div>
        )
      )}
    </div>
  )
}
