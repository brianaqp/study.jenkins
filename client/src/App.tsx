import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
        <h1>Hello world!</h1>
        <button onClick={() => setCounter(prev => prev + 1)} >Add one! {counter}</button>
    </>
  )
}

export default App;