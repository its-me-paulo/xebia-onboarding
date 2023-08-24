import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamSetupPage from "./pages/TeamSetup";

function Application(props: any) {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="team-setup" element={<TeamSetupPage/>}></Route>
            <Route path="ready-player-app" element={<TeamSetupPage/>}></Route>
        </Routes>
    </BrowserRouter>;
}

export default Application;