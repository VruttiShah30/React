export const List = ({ ele , deleteStudent }) =>{
    return (
        <>
            <tr>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td><button className="btn btn-primary">Edit</button></td>
                <td><button className="btn btn-danger" onClick={(e)=> deleteStudent(ele.username)}>Delete</button></td>
            </tr>

        </>
    )
}