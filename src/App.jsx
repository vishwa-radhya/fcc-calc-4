import './App.scss'
import Calculator from './calculator'
import { InputProvider } from './input-context'

function App() {

  return (
    <>
      <InputProvider>
        <Calculator/>
      </InputProvider>
    </>
  )
}

export default App
