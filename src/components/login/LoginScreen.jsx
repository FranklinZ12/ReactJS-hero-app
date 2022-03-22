import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/marvel', {
            replace: true
        });
    };

    return (
        <Fragment>
            <div className="container mt-5">
                <h1>LoginScreen</h1>
                <hr />
                <button
                    onClick={handleLogin}
                    className="btn btn-primary">
                    Login
                </button>
            </div>
        </Fragment>
    )
}

export default LoginScreen