import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Admin from './components/admin';
import Login from './components/login';


class Routers extends React.Component {
    render() {
        return (
            <Router>
                <div><div className="viki">
                    <nav className="navbar navbar-expand-lg navbar-light" id="navi">
                        <a className="navbar-brand" href="#" >Navbar</a>
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav nav-tabs">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Admin Login <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">User Login</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </li>
                                                            </ul>
                        </div>
                        
                    </nav>
</div>
                    <hr />
                    {/*<li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>*/}

                    <Route exact path="/" component={Admin} />
                    <Route path="/login" component={Login} />
                                   </div>
            </Router>
        )
    }
}

export default Routers;