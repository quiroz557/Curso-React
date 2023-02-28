import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter';

function App() {
  
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Vite + React</h1>

      <div className="card">
        <button>
          count is {  counter }
        </button>
      </div>

      <button onClick={() => dispatch( increment() )}>
          Increment
      </button>
      <button onClick={() => dispatch( decrement() )}>
        Decrement
      </button>
      <button onClick={() => dispatch( incrementByAmount(2) )}>
        IncrementBy2
      </button>
    </div>
  )
}

export default App
