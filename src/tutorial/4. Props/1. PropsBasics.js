import React from 'react'
import ReactDom from 'react-dom'

// Styles
import './index.scss'

function Listing() {

  const title2 = 'Title 2'
  const src2 = 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
  const text2 = 'Neki drugi tekst'

  const treciArtikal = {
    title: 'Title 3',
    src: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
    text: 'Neki treci tekst'
  }

  function foo() {
    return 'Vratili smo title iz funkcije'
    // return { a: 1 }
  }

  return (
    <section className='o-listing'>
      <Article
        title='title 1'
        src='https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
        text='Neki prvi tekst'
      />
      <Article
        title={title2}
        src={src2}
        text={text2}
      />
      <Article
        title={treciArtikal.title}
        src={treciArtikal.src}
        text={treciArtikal.text}
      />
      <Article
        title={foo()}
        src='https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
        text='Neki prvi tekst'
      />
    </section>
  )
}

const Article = (props) => {

  console.log(props)

  return (
    <article className='m-article' style={{ border: '5px solid rgb(17, 37, 81)', marginBottom: '20px' }}>
      <h3 className="m-article__title">{props.title}</h3>
      <div className="m-article__content">
        <img
          src={props.src}
          width='250'
          alt={props.title}
        />
        <p style={{ lineHeight: '2' }}>{props.text}</p>
      </div>
    </article>
  )
}

ReactDom.render(<Listing />, document.getElementById('root'))