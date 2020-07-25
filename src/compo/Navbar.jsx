import React, { Component } from "react";
// import "./navbar.css";
import axios from "axios";
import { Logout } from "../redux/actions/actionState";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Navbar extends Component {
    state = {
        token: null,
    };
    componentDidUpdate(pp, ss) {
        console.log(pp);
        const a = this.props.Logout(pp.user);
    }
    handleLogout = () => {
        this.setState({ token: this.props.user });
        alert("Logout Successfully");
    };

    render() {
        console.log(this.props.user);
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#/">
                        Imgur
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#/navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarColor01"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link">
                                    <Link to="/" style={{ color: "white" }}>
                                        Home{" "}
                                    </Link>
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link
                                        to="/new-post"
                                        style={{ color: "white" }}
                                    >
                                        New Post
                                    </Link>
                                </a>
                            </li>
                            {this.props.user.login === null ? (
                                <div>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#/">
                                            <Link
                                                to="/register"
                                                style={{ color: "white" }}
                                            >
                                                Sign Up
                                            </Link>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#/">
                                            <Link
                                                to="/login"
                                                style={{ color: "white" }}
                                            >
                                                Sign In
                                            </Link>
                                        </a>
                                    </li>
                                </div>
                            ) : (
                                <div>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#/">
                                            <Link
                                                to="/login"
                                                style={{ color: "white" }}
                                                onClick={this.handleLogout}
                                            >
                                                LogOut
                                            </Link>
                                        </a>
                                    </li>
                                </div>
                            )}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Search"
                            />
                            <button
                                className="btn btn-secondary my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.login,
    };
};
export default connect(mapStateToProps, { Logout })(Navbar);
