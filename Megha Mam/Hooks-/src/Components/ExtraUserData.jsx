import React, { useEffect, useMemo } from 'react'
import { ThemeContext } from '../Utils/ThemeContext';
import axios from 'axios';

function ExtraUserData() {

    const {theme,setTheme} = useContext(ThemeContext);
    const[user,setUser] = useSate([]);
    const[text,setText] = useState("");

    const getUser = async() => {
        try {
            let res = await axios.get('https://fakestoreapi.com/users');
            setUser(res.data)
        } catch (error) {
            console.log(error);
        }
    }


    //useMemo hook
    const filterUser = useMemo(()=>{

        if (text == ""){
            return user;
        }
        else {
            let NewUser = user.filter((index)=>{
                if(index.username.includes(text)){
                    return index
                }
            })
            return NewUser
        }
    },[text,user])


    useEffect(()=>{
        getUser();
    },[])

  return (
    <div style={{ backgroundColor : theme == 'light' ? 'white' : 'black' ,
            color : theme == 'light' ? 'black' : 'white' ,
            margin : '20px',
            borderWidth : '3px',
            borderStyle : 'solid',
            borderColor : theme == 'light' ? 'black' : 'white' }} >


            <h2>UserDetail</h2>
            <input type="text" placeholder='Search here' onChange={(e)=>{
                setText(e.target.value)
            }}
            
            style={{
                width : " 100% " ,
                padding : "14px 18px",
                fontSize : "16px",
                border : "2px solid #cbd5e1",
                borderRadius : "8px",
                outline : "none",
                boxSizing : "border-box",
                transition : "0.3s",
                backgroundColor  : "#fff" ,
                color : "#334155"
            
            }}  
            
            />






            </div>
  )
}

export default ExtraUserData