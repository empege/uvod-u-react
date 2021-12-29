import React, { useState, useEffect } from 'react'

/* Pravila:
  1. Po defaultu useEffect se pokrece posle prvog rendera i svakog rerendera
  2. Drugi parametar je dependency array
  3. Kada je dependency array prazan, useEffect se desava samo posle prvog rendera!
  4. Kada stavimo state promenljivu u dependency array, useEffect se desava kad god se promeni ta promenljiva
  5. useEffecta mozemo da imamo koliko zelimo
  6. Cleanup funkcija
*/

const UseEffectBasics1 = () => {

  const [notification, setNotification] = useState(0)
  const [width, setWidth] = useState(window.innerWidth)

  const addNotification = () => {
    setNotification(notification + 1)
  }

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    console.log('Ja se prikazujem samo posle prvog rendera jer imam prazan dependency array');
  }, [])

  useEffect(() => {
    console.log('useEffect');

    if (notification > 0) {
      document.title = `${notification} novih notifikacija`
    }

    // Cleanup funkcija - desi se pre onoga u samom useEffectu - samo se ne desi na prvi render
    return () => {
      console.log('Clean up');
    }
  }, [notification])

  // Cleanup
  useEffect(() => {
    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [width])

  console.log('Component rendered');

  return (
    <div>
      <h1>UseEffect Basics:</h1>
      <h3>Notifications:</h3>
      <h2>{notification}</h2>
      <button className='btn' onClick={addNotification}>Add Notification</button>
      <h2>{`Width is: ${width}px`}</h2>
    </div>
  )
}

export default UseEffectBasics1
