import React, { useState } from 'react'
import './Article.scss'
import Modal from '../Modal/Modal';

const Article = (props) => {
  const { title, src, text, date } = props
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  if (showModal) {
    document.documentElement.style.overflow = 'hidden';
    return <Modal setShowModal={setShowModal} {...props} />
  }

  return (
    <article className='m-article' style={{ border: '5px solid rgb(17, 37, 81)', marginBottom: '20px' }}>
      <h3 className="m-article__title">
        <span>{title}</span>
        <span onClick={() => { setShowModal(!showModal) }}>See More!</span>
      </h3>
      <div className="m-article__content">
        <img
          src={src}
          width='250'
          alt={title}
        />
        <p style={{ lineHeight: '2' }}>
          {show ? text : `${text.slice(0, 80)}...`}
          <button style={{ border: 'none' }} className="btn" onClick={() => { setShow(!show) }}>{show ? 'Show less' : 'Show more'}</button>
        </p>
      </div>
      <p>{date}</p>
    </article>
  )
}

export default Article