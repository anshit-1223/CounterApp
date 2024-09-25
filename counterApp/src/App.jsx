import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Count : {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increase {count}
        </button>
        &nbsp;&nbsp;
        <button onClick={() => setCount(0)}>
          Reset {count}
        </button>
        &nbsp;&nbsp;
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease {count}
        </button>

      </div>

    </>
  )
}

export default App
