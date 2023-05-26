import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './index.scss';

const Wrapper = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </nav>

            <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default Wrapper;
