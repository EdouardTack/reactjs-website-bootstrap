import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from '@src/Application.jsx';

// console.log(import.meta.env.VITE_SOME_KEY) // 123

ReactDOM.createRoot(document.getElementById('application')).render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>
);
