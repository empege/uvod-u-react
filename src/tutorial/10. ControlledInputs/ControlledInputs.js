/* Uradite kratku validaciju:
Napravite name i email state promenljivu koji predstavljaju jednu osobu.
Kada neko klikne na submit, prikazite tu osobu ispod forme i resetujete inpute (resetujete state nazad na prazan string).
Ako fali jedno od 2, neka iskoci alert ili neka greska - npr ako su oba true, onda prodji, ako ne - alert().
Mozete da imate niz objekata ljudi, koji je za pocetak prazan npr.
Ako vam treba da napravite i id, mozete ovako: id: new Date().getTime().toString();
*/

import React, { useState } from 'react'

const ControlledInputs = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)

    if (!(name && email)) {
      alert('Morate ubaciti oba!')
    } else {
      setPeople([...people, { id: `${new Date().getTime().toString()}`, name, email }]);
      setName('')
      setEmail('')
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <section>
      <h1>Controlled Inputs</h1>
      <form style={{ width: 'fit-content', margin: '20px auto' }} onSubmit={handleSubmit}>
        <div className="m-article">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange}></input>
        </div>
        <div className="m-article">
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
        </div>
        <button style={{ padding: '10px' }} className="m-article" type="submit">SuBaJa, khm Submit</button>
        {/* <button type="submit" onClick={handleSubmit}>Moze na click submit</button> */}
      </form>
      <div>
        {
          people.map((person) => {
            return (
              <article key={person.id} className="m-article">
                <h3>{person.name}</h3>
                <h3>{person.email}</h3>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default ControlledInputs