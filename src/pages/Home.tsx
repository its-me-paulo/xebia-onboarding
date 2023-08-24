import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TeamSetupPage from "./TeamSetup";

function Home(props: any) {
    return <div>This is the home Page
        <br></br>
        <Link to="team-setup">
            <button>Team set up</button>    
        </Link> 
    </div>
}

export default Home;