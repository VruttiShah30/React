import { useState } from 'react'
import ParentPage from './Components/ParentPage'
import UserData from './Components/UserData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParentPage />
      <UserData />
      
    </>
  )
}

export default App
