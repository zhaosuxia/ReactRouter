import React from 'react';
import {
  HashRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import Home from "./Components/Home";
import User from "./Components/User";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import ProtectedRoute from './Components/ProtectedRoute'
import MenuLink from './Components/MenuLink'
const NoMatch=()=><h1>未找到该页面</h1>
export default(
    <Router>
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a href="" className="navbar-brand">用户管理系统</a>
            </div>
            <ul className="nav navbar-nav">
              <li><MenuLink to="/">首页</MenuLink></li>
              <li><MenuLink to="/user">用户管理</MenuLink></li>
              <li><MenuLink to="/profile">个人设置</MenuLink></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/user" component={User}/>
            <ProtectedRoute path="/profile" component={Profile}/>
            <Route path="/login" component={Login}/>
            <Route component={NoMatch}/>
            {/*404路由*/}
          </Switch>
        </div>
      </div>
    </Router>
)