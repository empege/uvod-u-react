import React, { useState } from 'react'

/* Hooks Pravila:
  1. Hookovi pocinju sa reci "use" (useState, useEffect...)
  2. Hookove mozemo da koristimo samo unutar komponenti
  3. Hookove ne mozemo pozvati u kondicionalu (u if-u npr)
*/

const UseStateBasics1 = () => {

  // const state = useState('State Vrednost')
  // const stateVrednost = state[0]
  // const stateFunkcija = state[1]

  // const [stateVrednost, stateFunkcija] = [vrednost, funkcija]
  const [title, setTitle] = useState('NASLOV')

  // const x = 5;
  // if (x = 1) {
  //   const [title, setTitle] = useState('NASLOV')
  // }

  console.log(title, setTitle)

  // let title = 'NASLOV'
  const promeniNaslov = () => {
    // title = 'PROMENJEN NASLOV'

    if (title === 'NASLOV') {
      setTitle('NOVI NASLOV')
    } else {
      setTitle('NASLOV')
    }
    console.log(title)
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={promeniNaslov}>Promeni Naslov</button>
    </div>
  )
}

// Synthetic Events: https://reactjs.org/docs/events.html

export default UseStateBasics1
