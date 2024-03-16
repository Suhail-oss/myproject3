
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-info">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/read">UserRead</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/create">UserCreate</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/update/1">UserUpdate</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/search">UserSearch</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
