import React, { useState } from 'react'
import { accordionData } from './data';
import AccordionItem2 from './2-AccordionItem';

const Accordion = () => {

  const [items, setItems] = useState(accordionData)

  return (
    <section className="m-accordion">
      <h1>My Accordion</h1>
      {
        items.map((current) => {
          return <AccordionItem2 key={current.id} {...current} items={items} setItems={setItems} />
        })
      }
    </section>
  )
}

export default Accordion
