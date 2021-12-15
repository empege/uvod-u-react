import React from 'react'
import ReactDom from 'react-dom'

function Listing() {
  return (
    <section>
      <Article />
      <Article />
      <Article />
      <Article />
    </section>
  )
}

const Article = () => {
  return (
    <article>
      <h3 className='title'>Title 1</h3>
      <img src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" alt="" />
      <p>Neki tekst</p>
    </article>
  )
}

ReactDom.render(<Listing />, document.getElementById('root'))