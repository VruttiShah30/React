// import { useReducer } from "react"

import { Content } from "./components/Content"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { ContextProvider } from "./components/Mycontext"

// const reducer = (state, action) => {

//   switch (action.type) {
//     case 'incr':
//       state = state + 1
//       return state
//       break
//     case 'decr':
//       state = state - 1
//       return state
//       break
//     case 'by5':
//       state = state + 5
//       return state
//       break
//     default:
//       return state
//   }


// }
// const App = () => {

//   const [state, dispatch] = useReducer(reducer, 0)

//   return <>
//     <button onClick={() => dispatch({ "type": "incr" })}>+</button>
//     <span>{state}</span>
//     <button onClick={() => dispatch({ "type": "decr" })}>-</button>
//     <button onClick={() => dispatch({ "type": "by5" })}>+5</button>
//   </>
// }

// export default App



const App = () => {

  return <>
    <ContextProvider>
      <Header />
      <Content />
      <Footer />
    </ContextProvider>
  </>
}

export default App