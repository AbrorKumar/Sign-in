import React from 'react'
import {FaFacebookF, FaGoogle , FaLinkedinIn} from "react-icons/fa"

function SocialLinks() {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center mb-2"> 
                <div className="p-2 h4 rounded-circle mx-3 cursor-pointer links facebook"><FaFacebookF /> </div>
                <div className="p-2 h4 rounded-circle mx-3 cursor-pointer links google"><FaGoogle /> </div>
                <div className="p-2 h4 rounded-circle mx-3 cursor-pointer links linkedin"> <FaLinkedinIn /> </div>
            </div>
            <p className="text-center mb-3">or use your email account</p>
        </div>
    )
}

export default SocialLinks
