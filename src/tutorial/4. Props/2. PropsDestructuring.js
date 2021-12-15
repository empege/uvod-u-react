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

// const Article = ({ title, src, text }) => {
const Article = (props) => {

  console.log(props)

  // Object destructuring
  // const title = props.title
  // const src = props.src
  // const text = props.text

  // const { mojTitle: title, src, text } = props
  const { title, src, text } = props

  // Array destructuring
  const arr = ['jedan', 'dva', 'tri']

  // const prvi = arr[0]
  // const drugi = arr[1]
  // const treci = arr[2]

  // const [prvi, drugi, treci] = ['jedan', 'dva', 'tri']
  const [prvi, drugi, treci] = arr
  // const [prvi, , treci] = arr

  // Temp var
  let x = 1;
  let y = 2;
  // ;;;;;; ne zaboravi :D
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

  // let c = y
  // y = x
  // x = c

  [x, y] = [y, x]

  console.log(x, y)


  // Destructuring - spread
  const obj = {
    a: 1,
    b: 2
  }

  const obj2 = { ...obj, b: 3 }


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
      </div>
    </article>
  )
}

ReactDom.render(<Listing />, document.getElementById('root'))