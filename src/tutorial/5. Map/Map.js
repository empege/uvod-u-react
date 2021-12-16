import React from 'react'
import ReactDom from 'react-dom'

// Styles
import './index.scss'

function Listing() {

  const articles = [
    {
      title: 'Article 1',
      src: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
      text: 'Random text 1'
    },
    {
      title: 'Article 2',
      src: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
      text: 'Random text 2'
    },
    {
      title: 'Article 3',
      src: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
      text: 'Random text 3'
    },
    {
      title: 'Article 4',
      src: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
      text: 'Random text 4'
    }
  ]

  return (
    <section className='o-listing'>
      {
        articles.map((article, index) => <Article key={index} {...article} />)
      }
    </section>
  )
}

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

const Implicit = () => <h1>Implicit return</h1>

ReactDom.render(<Listing />, document.getElementById('root'))