import React from 'react'
import Article from '../Article/Article'
import { articles } from '../../data'
import './Listing.scss'

function Listing() {

  return (
    <section className='o-listing'>
      {
        articles.map((article, index) => <Article key={index} {...article} />)
      }
    </section>
  )
}

export const namedExport1 = 'Ovo je named export, mozemo da ga imamo koliko hocemo'
export const namedExport2 = 'Ovo je named export, mozemo da ga imamo koliko hocemo'
export const namedExport3 = 'Ovo je named export, mozemo da ga imamo koliko hocemo'

export default Listing