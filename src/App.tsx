import './App.css'
import QuoteForm from './components/QuoteForm'
import { QuoteProvider } from './Hooks/QuoteContext'
import QuoteList from './components/QuoteList'

function App() {

  return (
    <>
    <QuoteProvider>
    <QuoteList />
    <QuoteForm />
    {/* <QuoteItem /> */}
    </QuoteProvider>

    </>
    
  )
}

export default App
