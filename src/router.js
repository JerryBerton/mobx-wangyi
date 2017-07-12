import React from 'react';
import Layout from 'components/layout';
import Home from 'components/home';
import Text from 'components/Test';
import Mv from 'components/mv';
import Recommend from 'components/recommend';
// import {
//   Router,
//   Route,
//   browserHistory,
//   IndexRoute,
//   IndexRedirect
// } from 'react-router'
 import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui/styles';
export default (
    <Router history={history}>
      <Layout>
        <Route path="/test" component={Text}/>
        <Route path="/mv" component={Mv}/>
        <Route path="/recommend" component={Recommend}/>
        <Route path="/home" component={Home}/>
      </Layout>
    </Router>
)
