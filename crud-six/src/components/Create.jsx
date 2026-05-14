import { useState } from "react"

export const Create=({addUser})=>{

    //handle change
    const[formdata,setformdata]=useState(
        {
            name:"",
            email:"",
            phone:"",

        }
    )


    const handleChange=(e)=>{
        setformdata(
            {
                ...formdata,
                [e.target.name]:e.target.value
            }
        )

    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        addUser(formdata)
        setformdata(
            {
                name:"",
                email:"",
                phone:""
            }
        )
    }
    return(
        <>

         <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Enter Name"
                        name="name"
                        value={formdata.name}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter Email"
                        name="email"
                        value={formdata.email}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" placeholder="Enter Phone"
                        name="phone"
                        value={formdata.phone}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            Add User
                        </button>
                    </div>
                    </form>
        </>
    )
}