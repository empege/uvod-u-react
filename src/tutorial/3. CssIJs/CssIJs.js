import React from 'react'
import ReactDom from 'react-dom'

// Styles
import './index.scss'

function Listing() {
  return (
    <section className='o-listing'>
      <Article />
      <Article />
      <Article />
      <Article />
    </section>
  )
}

const Article = () => {

  // Za vecu logiku pravimo funkciju i vracamo vrednost
  function saberi() {
    // if() {
    //   ...
    // }
    const x = 5;
    return x + x
  }

  const title = 'Title 1'
  const src = 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
  const text = 'Neki tekst'

  return (
    <article className='m-article' style={{ border: '5px solid rgb(17, 37, 81)', marginBottom: '20px' }}>
      <h3 className="m-article__title">{title}</h3>
      <div className="m-article__content">
        <img
          src={src}
          width='250'
          alt={title}
        />
        <p style={{ lineHeight: '2' }}>{text}</p>
        <div>{2 + 2}</div>
        <div>{saberi()}</div>
        <div>{['jedan', 'dva', 'tri']}</div>

        {/* HTML ne podrzava objekte kao takve. Ako vratimo objekat u elementu, nece znati kako da ga procita, i izbacice gresku */}
        {/* <div>{{ a: 1, b: 2 }}</div> */}
        {/* <div>{['jedan', { a: 1, b: 2 }, 'tri']}</div> */}
      </div>
    </article>
  )
}

ReactDom.render(<Listing />, document.getElementById('root'))