import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement('div', {
    children: [
        React.createElement('span', { children: 'Hello' }),
        React.createElement('span', { children: ' ' }),
        React.createElement('span', { children: 'Students' }),
    ]
}));

