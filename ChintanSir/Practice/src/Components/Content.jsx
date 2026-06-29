import { useContext } from "react"
import { Mycontext } from "./Mycontext"

export const Content = () => {
    const {username,email} = useContext(Mycontext)
    

    return <>
    username  : {username} <br />
    email : {email} <br />
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nostrum voluptatum quia accusantium itaque ratione eveniet, omnis at enim unde quaerat nemo hic nisi? Perferendis quam vitae autem quas architecto.</>
}