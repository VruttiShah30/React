import 'bootstrap/dist/css/bootstrap.min.css'
import { Title } from './components/Title'
import { Nav } from './components/Nav'
import { Create } from './components/Create'
import { Display } from './components/Display'
import { useState } from 'react'
import { Container } from './components/Container'
import ContextProvider from './components/MyContext'
import { Outlet } from 'react-router-dom'
import { Test } from './components/Test'
const App = () => {

  return <>
    <ContextProvider>
      <Container>
        <Title />
        <Nav />
        <Outlet />
      </Container>
     
    </ContextProvider>
  </>


}

export default App