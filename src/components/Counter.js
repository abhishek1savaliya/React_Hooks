import React, { useState } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwO] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwO = () => {
        setCounterTwO(counterTwo + 1)
    }

    const isEven = () => {
        let i = 0
        while(i<2000000000) i++
        return counterOne % 2 === 0
    }


    return (
        <div>
            <button onClick={incrementOne}>Count One - {counterOne}</button>
            <span>{isEven() ? 'Even' : 'Odd'}</span>
            <div>
                <button onClick={incrementTwO}>Count One - {counterTwo}</button>
            </div>

        </div>
    )
}

export default Counter

