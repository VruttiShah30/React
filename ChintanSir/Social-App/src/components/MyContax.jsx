import { createContext, useReducer, useState } from "react";


export const MyContext = createContext()

const reducer = (state, action) => {

    if (action.type == 'add') {
        state = [...state, action.payload]
        return state
    }
    else if (action.type == 'delete') {

        state = state.filter(ele => {
            if (ele.username != action.payload) {
                return ele
            }
        })

        return state
    }
    else if (action.type == 'likes') {

        state = state.filter(ele => {
            if (ele.username == action.payload) {
                ele.likes = ele.likes + 1
            }
            return ele
        })

        return state

    }
    else {
        return state
    }

}

const ContextProvider = ({ children }) => {

    const [post, dispatch] = useReducer(reducer, [])

    const addPost = (data) => {
        dispatch({
            "type": "add",
            "payload": data
        })
    }

    const deletePost = (username) => {
        dispatch({
            "type": "delete",
            "payload": username
        })
    }

    const addLikes = (username) => {
        dispatch({
            "type": "likes",
            "payload": username
        })
    }

    // const [post, setPost] = useState([])

    // const addPost = (data) => {
    //     setPost([...post, data])
    // }

    // const deletePost = (username) => {
    //     setPost(post.filter(ele => {
    //         if (ele.username != username) {
    //             return ele
    //         }
    //     }))
    // }

    // const addLikes = (username) => {
    //     const newArray = post.filter(ele => {
    //         if (ele.username == username) {
    //             ele.likes = ele.likes + 1
    //         }
    //         return ele
    //     })
    //     setPost(newArray);
    // }

    return <MyContext.Provider value={{ post, addPost, deletePost, addLikes }}>
        {children}
    </MyContext.Provider>
}

export default ContextProvider