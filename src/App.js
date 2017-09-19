import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import routes from './routing-config'
import { NoMatch } from './components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              
              <li><NavLink to="/Counter" activeClassName="active">Counter</NavLink></li>
              <li><NavLink to="/Fetch" activeClassName="active">Fetch</NavLink></li>
            </ul>
          </div>
          <div className="App-intro">
            <Switch>
              {/*
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/BasicRouting" component={BasicRouting} />
                        <Route path="/Blocking" component={Blocking} />
                        <Route path="/Miss" component={Miss} />
                        <Route path="/QueryParams" component={QueryParams} />
                        <Route path="/Recursive" component={Recursive} />
                        <Route path="/login" component={Login} />
                        <Route path="/Protected" component={
                          () => (fakeAuth.isAuthenticated ?
                            (<ProtectedPage />) :
                            (<Redirect to={{pathname: "/login", state: {from: "/Protected"}}}/> ))} />
              */}
                {routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}
                <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
