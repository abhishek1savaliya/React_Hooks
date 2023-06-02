import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset': return initialState
        default: return state
    }
}


function CounterThree() {
    const [count, dispath] = useReducer(reducer, initialState)
    const [countTwo,dispatchTwo] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispath('increment')}>Increment</button>
            <button onClick={() => dispath('decrement')}>Decrement</button>
            <button onClick={() => dispath('reset')}>Reset</button>

            <div>
            <div>Count - {countTwo}</div>
            <button onClick={() => dispatchTwo('increment')}>Increment</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>

        </div>
    )
}

export default CounterThree
