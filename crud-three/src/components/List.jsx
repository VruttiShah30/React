

export const List  = ({ele}) => {
    return (
        <>
            <tr>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>

                 <td><button className="btn btn-primary btn-sm">Edit</button></td>
                <td><button className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
        </>
    )
}