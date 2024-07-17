import React, { useMemo, useState } from 'react'
import useMemoCustomHook from './hooks/useMemoHook'

const App = () => {
    const [counter,setCounter] = useState(0)
    const [counter2,setCounter2] = useState(100)
    const squaredValue = () => {
        console.log("Expensive call")
        return counter * counter
    }
    const memoizedSquareValue = useMemoCustomHook(squaredValue,[counter])
  return (
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
    <h2>Counter 1 : {counter}</h2>
    <h2>Squared Counter: {memoizedSquareValue}</h2>
    <button onClick={() => setCounter(counter+1)}>Increment</button>
    <h2>Counter 2: {counter2}</h2>
    <h2></h2>
    <button onClick={() =>setCounter2(counter2-1)}>Decrement</button>
    </div>
  )
}

export default App