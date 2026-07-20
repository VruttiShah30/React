import React from 'react'
import Counterapp from './Components/Counter'
import { About } from './Components/About'
import { InlineCss } from './Components/InlineCss'
import CssModules from './Components/CssModules'
import Home from './Components/Home'

const App = () => {
  return (
    <>
    {/* <Counterapp/> */}
    <About />
    <InlineCss/>
    <CssModules/>
    <Home username = "Vrutti" />

    </>
  )
}

export default App