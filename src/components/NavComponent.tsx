import { Button } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import './NavComponent.css';

export interface INavComponentProps {
}

export function NavComponent(props: INavComponentProps) {
    return (
        <>
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
            </nav>
            <Outlet />
        </>
    );
}
