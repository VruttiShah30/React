import '../App.css'
import styles from './Display.module.css'

export const Display = ( {tasks,removeTask}) => {
    return(<>
        <table className='table'>
            <tr>
                <th>Task</th>
                <th>Action</th>
            </tr>

            {tasks.map(ele => <tr key={ele}>
                <td>{ele}</td>
                <td><button onClick={() => removeTask(ele)} className="btn btn-danger">Delete</button></td>
            </tr>)}
        </table>

    </>
    )
}