import 'core-js/fn/object/assign';
// import 'element-theme-default/lib/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'

import router from './router.js';
import stores from './stores'
// Render the main component into the dom
import { MuiThemeProvider } from 'material-ui/styles';
ReactDOM.render(<MuiThemeProvider><Provider {...stores}>{router}</Provider></MuiThemeProvider>,
  document.getElementById('app')
);
