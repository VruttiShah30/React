import ContextProvider from "./components/Mycontext"
import { UseEffect } from "./components/UseEffect"
import { UseReducer } from "./components/UseReducer"
import { UseRef } from "./components/UseRef"
import { UseState } from "./components/UseState"

const App = () => {

  return <>
    <ContextProvider>
      <UseState />
      <hr />
      <UseRef />
      <hr />
      <UseEffect />
      <UseReducer />
    </ContextProvider>
  </>
}

export default App