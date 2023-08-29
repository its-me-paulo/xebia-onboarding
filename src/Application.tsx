import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamSetupPage from "./pages/TeamSetup";
import { LeaderBoard } from "./pages/LeaderBoard";
import { NavComponent } from "./components/NavComponent";
import './Application.css'
import { Card, Paper } from "@mui/material";

function Application(props: any) {
    return <BrowserRouter>
        <NavComponent></NavComponent>
        <div className="card">
            <Card elevation={2} style={{height: "100%"}}>
                <Routes>
                    <Route path="/" element={<LeaderBoard />}></Route>
                    <Route path="team-setup" element={<TeamSetupPage />}></Route>
                    <Route path="ready-player-app" element={<TeamSetupPage />}></Route>
                </Routes>
            </Card>
        </div>

    </BrowserRouter>;
}

export default Application;