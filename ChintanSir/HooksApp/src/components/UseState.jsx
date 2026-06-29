import { useState } from "react"

export const UseState = () => {

    const [count, setcount] = useState(0)

    return <>
        <button onClick={() => { setcount(count + 1) }}>+</button>
        <span>{count}</span>
        <button onClick={() => setcount(count - 1)}>-</button>
    </>
}