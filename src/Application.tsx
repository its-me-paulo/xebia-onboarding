import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamSetupPage from "./pages/TeamSetup";
import { LeaderBoard } from "./pages/LeaderBoard";
import { NavComponent } from "./components/NavComponent";
import './Application.css'
import { ReadyPlayerApp } from "./pages/ReadyPlayer";
import { ChallengePage } from "./pages/ChallengePage";

function Application(props: any) {
    return <BrowserRouter>
        <Routes>
                <Route path="/" element={<NavComponent />}>
                    <Route path="" element={<LeaderBoard />} />
                    <Route path="team-setup" element={<TeamSetupPage />} />
                </Route>
                <Route path="ready-player-app" element={<ReadyPlayerApp />} />
                <Route path="challenge" element={<ChallengePage />} />
        </Routes>

    </BrowserRouter>;
}

export default Application;