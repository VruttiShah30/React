


export const List = ( { ele , deleteStudent} ) => {
    return (
        <>
            <tr>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
            </tr>
        </>
    )
}