import { useRef } from "react";
import { useState } from "react";
import { List } from "./List";  

export const Display = ({ students , deleteStudent }) => {

    return (
        <>
            <div className="col-md-8">
                <div className="card shadow">
                    <div className="card-header bg-dark text-white text-center fs-2">
                        User List
                    </div>

                    <div className="card-body">
                        <table className="table table-bordered text-center">
                            <thead className="table-light">
                                <tr>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th colSpan="2">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {students.map(ele =>
                                    <List 
                                        key={ele.username}
                                        ele={ele}
                                        deleteStudent={deleteStudent}
                                    />
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
} 