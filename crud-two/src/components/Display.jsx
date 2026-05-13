import { List } from "./List"

export const Display = ({
    student,
    deleteStudent,
    editStudent
}) =>{

    return (
        <>
            <div className="col-md-8">

                <div className="card shadow">

                    <div className="card-header bg-dark text-white">
                        User List
                    </div>

                    <div className="card-body">

                        <table className="table table-bordered table-hover text-center">

                            <thead className="table-secondary">

                                <tr>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th colSpan="2">Action</th>
                                </tr>

                            </thead>

                            <tbody>

                                {
                                    student.length > 0 ?

                                    student.map(ele =>
                                        <List
                                            key={ele.username}
                                            ele={ele}
                                            deleteStudent={deleteStudent}
                                            editStudent={editStudent}
                                        />
                                    )

                                    :

                                    <tr>
                                        <td colSpan="5" className="text-danger fw-bold">
                                            No Data Found
                                        </td>
                                    </tr>
                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>
        </>
    )
}