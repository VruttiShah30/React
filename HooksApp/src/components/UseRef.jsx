import { useRef } from "react"
import { UseState } from "./UseState"

export const UseRef = () => {

    const name = useRef()
    const email = useRef()

    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log(name.current.value);

    }


    return <>
        <form onSubmit={SubmitHandler}>
            <input type="text" placeholder="Enter username" ref={name} />
            <input type="text" placeholder="Enter email" ref={email} />
            <input type="submit" />
        </form>

    </>
}