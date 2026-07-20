import React from 'react'
import person from '../assets/person.jpg'

function Home(props) {
    let AuthCheck = true ;
    let qualification = "BscIT";

  return (
    <>
         <img src = {person} alt =""/>
         {
            AuthCheck == true ? ( <h1>WelCome to App : {props.username}</h1>) : <a>Login</a>
         }

         <p> Qualification : {qualification ?? "No data found"}</p>
    </>  )
}

export default Home