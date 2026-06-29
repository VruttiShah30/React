import { createContext } from "react";


export const Mycontext = createContext()

export const ContextProvider = ({ children }) => {

    const username = "xyz"
    const email = "xyz@gmail.comn"
    return <Mycontext.Provider value={{ username, email }}>
        {children}
    </Mycontext.Provider>

}