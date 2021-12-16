import React from 'react'
import './Article.scss'

const Article = (props) => {
  const { title, src, text, children } = props

  return (
    <article className='m-article' style={{ border: '5px solid rgb(17, 37, 81)', marginBottom: '20px' }}>
      {children}
      <h3 className="m-article__title">{title}</h3>
      <div className="m-article__content">
        <img
          src={src}
          width='250'
          alt={title}
        />
        <p style={{ lineHeight: '2' }}>{text}</p>
      </div>
    </article>
  )
}

export default Article