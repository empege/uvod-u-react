import React from 'react'
import ReactDom from 'react-dom'

// Components
import Listing from './my blog/components/Listing/Listing'
import UseStateBasics1 from './tutorial/7. UseStateBasics/UseStateBasics1'
import People from './tutorial/8. UseStateZadaci/People'
import Person from './tutorial/8. UseStateZadaci/Person'
import Counter from './tutorial/8. UseStateZadaci/Counter'
import Skracenice from './tutorial/9. Skracenice/Skracenice'
import Accordion from './tutorial/8. UseStateZadaci/Accordion'
import Accordion2 from './tutorial/8. UseStateZadaci/2-Accordion'
import ControlledInputs from './tutorial/10. ControlledInputs/ControlledInputs'
import UseEffectBasics1 from './tutorial/11. UseEffectBasics/UseEffectBasics1'
import UseEffectBasics2 from './tutorial/11. UseEffectBasics/UseEffectBasics2'

// Styles
import './index.scss'

function App() {
  return <Listing />
}

ReactDom.render(<App />, document.getElementById('root'))