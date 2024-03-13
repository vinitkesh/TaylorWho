import { useState } from 'react'

import axios from 'axios'

import './App.css'

function App() {

  const [quote, setQuote] = useState('')

  return (
    <>
      <h2>Kanye west once said: </h2>
      <h1>{quote}</h1>
      <button onClick={()=> axios.get('https://api.kanye.rest').then(result=>setQuote(result.data.quote))}>
        Get Quote
      </button>
    </>
  )
}

export default App
