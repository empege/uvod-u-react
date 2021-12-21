/* ACCORDION TASK:
Hocemo da napravimo ACCORDION.
Imamo naslov gore.
Zatim nekoliko panela, ili itema, koji sadrze naslov, ikonicu, koja ce biti + ili - (panel moze biti odvojena komponenta, ne mora)
Mozete react icons da koristite.
I neka ima info koji je skriven za pocetak, a onda na klik tog panela se prikaze ili sakrije opet.
Dakle, imamo niz objekata od 4, 5 objekata koji imaju id, title, info. Sa tim uradite map, prikazete ih sve i date im onClick da toggluje prikaz, sto mozete preko state da uradite.
*/

import React, { useState } from 'react'
import { accordionData } from './data';
import AccordionItem from './AccordionItem';

const Accordion = () => {

  return (
    <section className="m-accordion">
      <h1>My Accordion</h1>
      {
        accordionData.map((current) => {
          return <AccordionItem key={current.id} {...current} />
        })
      }
    </section>
  )
}

export default Accordion
