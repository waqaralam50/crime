import React, { Component } from 'react';
class Admin extends Component {
    render() {
        return (
            <div className="Jumbotron">
                <form>
                    <div className="login-box">
                        <img src="logo.JPG" className="avatar" />
                        <h1>Login Here</h1>
                        <form>
                            <p>Admin Name</p>
                            <input type="text" name="username" placeholder="Enter Admin name" />
                            <p>Password</p>
                            <input type="text" name="Password" placeholder="Enter Password" />
                            <input type="submit" name="submit" value="Login" />
                            <a href="#">Forget Password</a>

                        </form>

                    </div>
                </form>
            </div>
        );
    }
}

export default Admin;
