export const Display = ( {tasks,removeTask}) =>{
    return(<>
        <table>
            <tr>
                <th>Task</th>
                <th>Action</th>
            </tr>

            {tasks.map(ele => <tr key={ele}>
                <td>{ele}</td>
                <td><button onClick={() => removeTask(ele)}>Delete</button></td>
            </tr>)}
        </table>

    </>
    )
}