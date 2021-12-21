import React from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const AccordionItem = (props) => {

  const { id, title, info, isActive, items, setItems } = props;

  const toggleItem = (id) => {
    console.log(id);

    const newItems = items.map((current) => {
      if (current.id === id) {
        return { ...current, isActive: !isActive }
      }
      return { ...current, isActive: false }
    })

    setItems(newItems)
  }

  return (
    <article key={id} className="m-accordion__item">
      <div className="m-accordion__header" onClick={() => { toggleItem(id) }}>
        {
          title && <h4>{title}</h4>
        }
        <button className="m-accordion__btn">{isActive ? <AiFillMinusCircle /> : <AiFillPlusCircle />}</button>
      </div>
      <p className={`m-accordion__info ${isActive && 'm-accordion__info--active'}`}>{info}</p>
    </article>
  )
}

export default AccordionItem
