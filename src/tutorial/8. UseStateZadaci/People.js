/*
Napravite jedan js fajl npr. data.js u kom cete imati niz, koji isto moze da se zove data / people i uradite named export da moze da se koristi dalje.
Neka to bude niz objekata koja imaju po 4 coveka npr. I svaki neka ima id i ime.
Zatim napravite novu komponntu koja se zove People. U nju importujte ovu datu.
Koristecu useState napravite svoju promenljivu people sa fjom setPeople. Defaulta vrednost ce biti taj importovani niz objekata.
Na kraju koristeci map() fju, izvrtite ceo taj niz da prikazuje imena h3 tagovima i neka svaki ima svoj key (id), i neka prikazuje ime tog coveka. Dajte i klasu da mozete lako da stilizujete to.
Ako ovo uspete: napravite button koji je na dnu komponente i kojim cete izbrisati sva imena, tacnije sve ljude, tako da se nista vise ne prikazuje. (tip: people ce biti prazan niz :D)
*/

import React, { useState } from 'react'
// data
import { data } from './data'


const People = () => {

  const [people, setPeople] = useState(data);
  // console.log(people);

  const deleteAllPeople = () => {
    setPeople([]);
  }

  const deleteCurrent = (id) => {
    console.log(id);

    const newPeople = people.filter((current, index) => {
      if (current.id !== id) {
        return current;
      }
      return false;
    });

    console.log(newPeople);
    setPeople(newPeople);
  }
  return (
    <section>
      {
        people.map((person) => {
          const { id, name } = person;

          return (
            <article key={id} className="m-article m-article--people">
              <h3>{name}</h3>
              <button onClick={() => { deleteCurrent(id) }}>Izbrisi me!</button>
            </article>
          )
        })
      }
      <button className="m-article" onClick={deleteAllPeople}>Delete Everyone!</button>
    </section>
  )
}

export default People
