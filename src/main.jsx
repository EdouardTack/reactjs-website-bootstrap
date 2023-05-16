import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from '@src/App.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('application')).render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>
);
