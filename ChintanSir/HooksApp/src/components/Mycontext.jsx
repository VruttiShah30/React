import { createContext } from "react";


export const Mycontext = createContext()

const ContextProvider = (props) => {
    var username = "abc"
    var email = "abc@gmail.com"

    return <Mycontext.Provider value={{ username, email }}>
        {props.children}

    </Mycontext.Provider>
}

export default ContextProvider