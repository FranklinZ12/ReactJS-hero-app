import React, { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { types } from '../../types/types';


const LoginScreen = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Franklin'
            }
        };

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/';

        navigate(lastPath, {
            replace: true
        });
    };

    return (
        <Fragment>
            <div className="container mt-5">
                <h1>Login</h1>
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