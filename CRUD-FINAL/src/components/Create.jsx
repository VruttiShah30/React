import { useRef, useEffect } from "react";

export const Create = ({
    addStudent,
    updateStudent,
    editData,
    isEdit
}) =>{

    const username = useRef();
    const email = useRef();
    const phone = useRef();

    // FILL DATA IN INPUTS
    useEffect(()=>{

        if(editData){

            username.current.value = editData.username;
            email.current.value = editData.email;
            phone.current.value = editData.phone;
        }

    }, [editData])

    const submitHandler = (e) =>{

        e.preventDefault();

        const data = {
            username : username.current.value,
            email : email.current.value,
            phone : phone.current.value
        }

        // UPDATE
        if(isEdit){
            updateStudent(data);
        }

        // ADD
        else{
            addStudent(data);
        }

        // CLEAR INPUTS
        username.current.value = "";
        email.current.value = "";
        phone.current.value = "";
    }

    return (
        <>
            <div className="col-md-4">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white">
                        {isEdit ? "Update User" : "Add User"}
                    </div>

                    <div className="card-body">

                        <form onSubmit={submitHandler}>

                            <div className="mb-3">
                                <label className="form-label">Username</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter username"
                                    ref={username}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    ref={email}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter phone"
                                    ref={phone}
                                />
                            </div>

                            <button
                                type="submit"
                                className={`btn w-100 ${
                                    isEdit
                                    ? "btn-warning"
                                    : "btn-success"
                                }`}
                            >
                                {isEdit ? "Update" : "Submit"}
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}