import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import headerItems from './headerItems.jsx';

render(<App menuItems={headerItems} />, document.getElementById('app'));