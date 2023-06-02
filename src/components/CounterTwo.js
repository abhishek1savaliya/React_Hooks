import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement': return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2': return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2': return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset': return initialState
        default: return state
    }
}


function CounterTwo() {
    const [count, dispath] = useReducer(reducer, initialState)
    return (
        <div>
            <div>FirstCounter - {count.firstCounter}</div>
            <div>SecondCounter - {count.secondCounter}</div>
            <button onClick={() => dispath({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispath({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispath({ type: 'increment', value: 5 })}>Increment 2</button>
            <button onClick={() => dispath({ type: 'decrement', value: 5 })}>Decrement 2</button>

            <div>
                <button onClick={() => dispath({ type: 'increment2', value: 1 })}>Increment Counter 2</button>
                <button onClick={() => dispath({ type: 'decrement2', value: 1 })}>Decrement Counter 2</button>
            </div>

            <button onClick={() => dispath({ type: 'reset' })}>Reset</button>

        </div>
    )
}

export default CounterTwo
