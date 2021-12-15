import React from 'react'
import ReactDom from 'react-dom'

/* JSX Pravila:
 1. Svaki element / komponenta mora da ima closing tag (cak i br, img itd)
 2. Uvek vracamo jedan element / fragment (<React.Fragment /> / <>)
 3. Ako hocemo jsx u vise linija, koristimo ( ) posle returna
 4. HTML atribute pise sa camelCase ( onclick => onClick )
 5. class => className; for => htmlFor
*/

function Pozdrav() {
  return (
    <>
      <h3 className='title'>Hello <br />Merkle!</h3>
      <p>Neki tekst</p>
    </>
  )

  // return React.createElement('div', {}, React.createElement('h3', {}, 'JSX nije HTML!'))
}

ReactDom.render(<Pozdrav />, document.getElementById('root'))