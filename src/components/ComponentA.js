import React, { useContext } from 'react'
import { CountContext } from '../App'
function ComponentA() {
    const countContext = useContext(CountContext)
  return (
    <div>
        ComponentA  {countContext.countState}
       <button onClick={() => countContext.countdispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countdispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countdispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
