import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authContext);
    const location=useLocation();
    console.log(location)
    if(loading)
    {
        return(
        <div className="d-flex justify-content-center my-5">
                  <Spinner animation="border" variant="primary" />

        </div>
        )
    }
    if(user)
    {
        return children
    }
    return (
       <Navigate to='/login/login' state={{ from: location }} replace ></Navigate>
    );
};

export default PrivateRoute;