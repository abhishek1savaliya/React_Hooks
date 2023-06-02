import React, { useContext } from 'react'
import { CountContext } from '../App'
function ComponentC() {
    const countContext = useContext(CountContext)
  return (
    <div>
        ComponentC  {countContext.countState}
       <button onClick={() => countContext.countdispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countdispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countdispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentC
