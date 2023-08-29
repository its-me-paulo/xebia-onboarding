import * as React from 'react';
import './NavComponent.css';
import { Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

export interface INavComponentProps {
}

export function NavComponent(props: INavComponentProps) {
    return (
        <nav>
            <div className="nav-row">
                <h1>Xebia</h1>
                <div className="button-container">
                    <NavLink to="/team-setup" style={({ isActive }) => ({ display: isActive ? "none" : "flex", textDecoration: "none" })}>
                        <Button variant='contained' style={{ fontSize: "1.1vw" }}>Start New</Button>
                    </NavLink>
                    <NavLink to="/" style={({ isActive }) => ({ display: isActive ? "none" : "flex", textDecoration: "none" })}>
                        <Button variant='contained' style={{ fontSize: "1.1vw" }} color="error">Cancel</Button>
                    </NavLink>
                </div>
            </div>
            <div id="nav-divider"></div>
            <div className="nav-header">
                <h3>Leader Board</h3>
            </div>
        </nav>
    );
}
