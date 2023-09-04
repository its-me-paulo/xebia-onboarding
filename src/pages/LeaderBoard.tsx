import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TeamSetupPage from "./TeamSetup";
import * as React from 'react';
import { NavComponent } from "../components/NavComponent";
import { ILeaderBoardRoItemProps, LeaderBoardRoItem } from "../components/LeaderBoardRowItem";
import { PageHeaderComponent } from "../components/PageHeader";

export interface IHomeProps {
}

export function LeaderBoard(props: IHomeProps) {
  const leaderBoardItems: ILeaderBoardRoItemProps[] = []
  for (let counter: number = 1; counter <= 10; counter++) {
    leaderBoardItems.push({position: counter, imageUrl: "download.jpeg", teamName: "Team " + counter, time: "03:27:13h"})
  }

  return (
    <div>
      <PageHeaderComponent header={"Leader Board"}/>
      {leaderBoardItems.map(value => <LeaderBoardRoItem {...value}></LeaderBoardRoItem>)}
    </div>
  );
}