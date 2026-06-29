import { useState } from "react"
import { Title } from "./components/Title"
import { Create } from "./components/Create"
import { Display } from "./components/Display"


const App=()=>{
//add user
const[users,setUsers]=useState([])

const addUser=(data)=>{
    setUsers([...users,data])

}
//delete User
const deleteUser=(index)=>{
    const newArray=users.filter((_,i)=>i!==index)
    setUsers(newArray)
}



    return(
        <>
        <Title></Title>
        <Create addUser={addUser}></Create>
        <Display users={users} deleteUser={deleteUser}></Display>
        </>
    )
}
export default App