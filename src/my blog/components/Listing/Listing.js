import React, { useState, useEffect } from 'react'
import Article from '../Article/Article'
// import { articles } from '../../data'
import './Listing.scss'

const url = 'http://localhost:3000/articles';

function Listing() {

  const [articles, setArticles] = useState(null);
  const [search, setSearch] = useState('');

  async function fetchArticles(url) {
    const response = await fetch(url);
    const articlesData = await response.json();
    setArticles(articlesData);
  }

  useEffect(() => {
    fetchArticles(url);
  }, [])

  return (
    <section className='o-listing'>
      <h1 style={{ textAlign: 'center' }}>My Blog</h1>
      <div className="m-article" style={{ width: 'fit-content', margin: '20px auto', textAlign: 'left' }}>
        <label htmlFor="search">Search articles:</label>
        <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
      </div>
      {
        articles && articles
          .filter((current) => {
            const currentTitle = current.title.toUpperCase();
            if (currentTitle.includes(search.toUpperCase())) return current;
            return false;
          })
          .map((article, index) => <Article key={index} {...article} />)
      }
    </section>
  )
}

export default Listing