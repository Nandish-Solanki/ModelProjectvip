import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

function Userloginpage() {
    const [login, updatelogin] = useState({
        email: "",
        pass: ""
    });

    const updatefield = (e) => {
        const { name, value } = e.target;
        updatelogin(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 bg-light shadow p-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <p className='h4'>User Login page</p>
                            </div>
                            <div className='col-12 mt-3'>
                                <div className="mb-3">
                                    <label className="form-label"><MdOutlineMail /> Email address</label>
                                    <input type="email" className="form-control" value={login.email} name='email' onChange={updatefield} />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label className="form-label"><TbLockPassword />Password</label>
                                    <input type="password" className="form-control" value={login.pass} name='pass' onChange={updatefield} />
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div className="mb-3">
                                    <button type='button' className='btn btn-success'>Login</button>
                                    <Link to="/registor" className='ms-5'>User Registor</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userloginpage