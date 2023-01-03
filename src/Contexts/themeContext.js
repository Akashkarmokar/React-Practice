/**
 * In this section we made our custome Context API.
 */

import createContext from '../lib/Context';

const themeContext = createContext({ theme: 'light' });
/**
 * But we can replace our previous code with built in
 * React Context API .
 */
// import React from 'react';
// cnst themeContext = React.createContext();

export default themeContext;
