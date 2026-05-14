

export const Create = () => {

    const [ student ,setStudent ] = useState([]);

    

    return (
        <>
        <div className="col-md-4">
                <div className="card shadow">

                    <div className="card-header bg-primary text-white text-center fs-2">Add User</div>

                    <div className="card-body p-4">

                        <form>
                            <div className="mb-4">
                                <label>Username</label>
                                <input type="text" className="form-control" placeholder="Enter username"/>
                            </div>

                            <div className="mb-4">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email"/>
                            </div>

                            <div className="mb-4">
                                <label>Phone</label>
                                <input type="text" className="form-control" placeholder="Enter phone"/>
                            </div>

                            <button className="btn btn-success w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    ) 
}