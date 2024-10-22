import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuoteForm from './components/QuoteForm'
import { QuoteProvider } from './Hooks/QuoteContext'

function App() {

  return (
    <>
    <QuoteProvider>
      <QuoteForm />
    </QuoteProvider>

    </>
    
  )
}

export default App
