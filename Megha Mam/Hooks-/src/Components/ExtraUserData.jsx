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
            borderColor : theme == 'light' ? 'black' : 'white' }} >ExtraUserData</div>
  )
}

export default ExtraUserData