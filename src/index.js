import React from 'react'
import ReactDom from 'react-dom'

// Components
import Listing from './my blog/components/Listing/Listing'
import UseStateBasics1 from './tutorial/7. UseStateBasics/UseStateBasics1'
import People from './tutorial/8. UseStateZadaci/People'
import Person from './tutorial/8. UseStateZadaci/Person'

// Styles
import './index.scss'

function App() {
  return <Person />
}

ReactDom.render(<App />, document.getElementById('root'))