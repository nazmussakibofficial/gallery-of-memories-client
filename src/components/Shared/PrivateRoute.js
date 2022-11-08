import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className='flex justify-center my-6'>
                <button className="btn loading">loading</button>
            </div>
        );
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;