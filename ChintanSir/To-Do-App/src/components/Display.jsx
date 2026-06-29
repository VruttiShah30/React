export const Display = ({ task ,removeTask }) => {


    return(<>
        <table>
            <tr>
                <th>Task</th>
                <th>Action</th>
            </tr>
            {task.map(ele=> <tr key={ele}>
                <td>{ele}</td>
                <td><button onClick={()=>removeTask(ele)}>delete</button></td>
            </tr>)}
        </table>
        
    </>
    )
}