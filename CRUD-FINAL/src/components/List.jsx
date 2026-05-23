export const List = ({
    ele,
    deleteStudent,
    editStudent
}) =>{

    return (
        <>
            <tr>

                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>

                <td>
                    <button
                        className="btn btn-primary"
                        onClick={() => editStudent(ele)}
                    >
                        Edit
                    </button>
                </td>

                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteStudent(ele.username)}
                    >
                        Delete
                    </button>
                </td>

            </tr>
        </>
    )
}