import React from 'react'
import InputField from '../components/InputField'
import SocialLinks from '../components/SocialLinks'

function Signin() {
    return (
        <div className="container d-flex justify-content-center ">
            <div className="box-gradient p-5 rounded">
                <h1 className=" font-weight-bold text-light text-center mb-5">Sign in SADO</h1>
                <SocialLinks />
                <InputField />
            </div>
        </div>
    )
}

export default Signin;
