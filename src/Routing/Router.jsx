import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { layouts, routes } from '@config/routes.jsx';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={layouts.default}>
                        {Object.keys(routes).map((key) => {
                            return <Route key={key} path={routes[key]['path']} element={routes[key]['component']} />;
                        })}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
