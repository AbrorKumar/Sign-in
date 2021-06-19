import React from 'react'
import {Link} from "react-router-dom";
import {AiOutlineMail , AiFillLock} from "react-icons/ai"

function InputField() {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <form className="mb-4">
                <div className="mb-3 d-flex align-items-center inputs p-2 text-secondary"><AiOutlineMail className="mx-1" /> <input type="email" placeholder="Email"/></div>
                <div className="mb-2 d-flex align-items-center inputs p-2 text-secondary"><AiFillLock  className="mx-1" /><input  type="password" placeholder="Password"/></div>
                <p className="text-center"><Link className="text-dark" to="/forget" >Forgot Your Password</Link></p>
            </form>
            <button className="text-uppercase signin-btn "><span className="link__effect">Sign in</span></button>
        </div>
    )
}

export default InputField
