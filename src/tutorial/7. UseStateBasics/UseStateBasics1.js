import React, { useState } from 'react'

/* Hooks Pravila:
  1. 
*/

const UseStateBasics1 = () => {

  const state = useState('State Vrednost')

  const stateVrednost = state[0]
  const stateFunkcija = state[1]

  // const [stateVrednost, stateFunkcija] = [vrednost, funkcija]
  const [title, setTitle] = useState('Nas Title')

  console.log(title, setTitle)

  // let title = 'NASLOV'

  const promeniNaslov = () => {
    // title = 'PROMENJEN NASLOV'
    setTitle('NOVI NASLOV')
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
