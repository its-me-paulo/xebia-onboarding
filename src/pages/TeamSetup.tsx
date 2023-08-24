import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ITeamSetupPageProps {
}

export default function TeamSetupPage (props: ITeamSetupPageProps) {
  return (
    <div>
      This is the team page <br></br>
      <Link to="/onboarding-app"> 
        <button>
        Start Game
        </button>
      </Link>
    </div>
  );
}
