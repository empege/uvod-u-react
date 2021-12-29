import React, { useState, useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa'

const url = 'https://api.github.com/users'

const UseEffectBasics2 = () => {

  const [users, setUsers] = useState(null)

  async function fetchData(url) {
    const response = await fetch(url)
    const newUsers = await response.json()
    setUsers(newUsers)
    console.log(newUsers)
  }

  useEffect(() => {
    fetchData(url)
  }, [])

  if (users) {
    return (
      <div>
        <h1>Github Users:</h1>
        <h2>Fetching data...</h2>
        {
          users.map((user) => {
            return (
              <article key={user.id}>
                <h3>Ime: {user.login}</h3>
                <img width="250" src={user.avatar_url} alt="" />
                <br />
                <a href={user.html_url}>Link to repos</a>
              </article>
            )
          })
        }
      </div>
    )
  }
  return <h1 className='spinner'><FaSpinner /><br />LOADING</h1>
}

export default UseEffectBasics2
