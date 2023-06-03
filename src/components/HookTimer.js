import React, { useEffect, useState, useRef } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(ptimer => ptimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }

    }, [])
    return (
        <div>
            Hook Timer {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>

        </div>
    )
}

export default HookTimer
