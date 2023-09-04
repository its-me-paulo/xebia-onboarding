import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TeamSetupPage from "./TeamSetup";
import * as React from 'react';
import { NavComponent } from "../components/NavComponent";
import { ILeaderBoardRoItemProps, LeaderBoardRoItem } from "../components/LeaderBoardRowItem";
import { PageHeaderComponent } from "../components/PageHeader";
import { LeaderBoardApi } from "../apis/LeaderBoardApi";

export interface IHomeProps {
}

export function LeaderBoard(props: IHomeProps) {
  const [leaderBoard, setLeaderBoard] = React.useState<ILeaderBoardRoItemProps[]>([])

  React.useEffect(() => {
    LeaderBoardApi.get().then((leaderBoard) => setLeaderBoard(leaderBoard))
  }, [])

  return (
    <div>
      <PageHeaderComponent header={"Leader Board"}/>
      {leaderBoard.map(value => <LeaderBoardRoItem {...value}></LeaderBoardRoItem>)}
    </div>
  );
}