import React from 'react'
import ReactDom from 'react-dom'

// Components
import Listing from './my blog/components/Listing/Listing'
import UseStateBasics1 from './tutorial/7. UseStateBasics/UseStateBasics1'

// Styles
import './index.scss'

function App() {
  return <UseStateBasics1 />
}

ReactDom.render(<App />, document.getElementById('root'))