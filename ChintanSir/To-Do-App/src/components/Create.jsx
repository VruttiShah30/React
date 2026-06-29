import { useState } from "react";

export const Create = ({ addtask }) => {

    var [data,setData] = useState();

    const setDataHandler = (e) => {
        setData(e.target.value);
    }

    const addtaskHandler = (e) => {
        e.preventDefault();
        addtask(data);
    }
    return(<>
        <form action="">
        <input type="text" name="todo" id="todo" onChange={setDataHandler}/>
        <button onClick={addtaskHandler}>Submit</button>
        </form>
    </>
    )
}