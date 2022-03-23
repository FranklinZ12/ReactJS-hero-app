import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const PublicRoute = ({ children }) => {
    const { user } = useContext(AuthContext)

    return user.logged
        ? <Navigate to="/" />
        : children
}

export default PublicRoute