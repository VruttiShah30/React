export const Display=({users,deleteUser})=>{
    return(
        <>

         <div className="card shadow mt-5">

            <div className="card-header bg-primary text-white text-center">
                <h3>User List</h3>
            </div>

            <div className="card-body">
                <table className="table table-bordered text-center">

                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>

                    {/* table loop */}
                    
                    
                 


                    <tbody id="tableBody">
                        {users.map((user1,index)=>(

                        <tr key={index}>
                        <td>{user1.name}</td>
                        <td>{user1.email}</td>
                        <td>{user1.phone}</td>
                        <td>
                            <button onClick={()=>deleteUser(index)}>Delete</button>
                        </td>
                        </tr>

                    ))
                }

                    </tbody>
                    

                </table>

            </div>
        </div>

    

        </>
    )
}