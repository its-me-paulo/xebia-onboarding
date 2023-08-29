import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TeamSetupPage from "./TeamSetup";
import * as React from 'react';
import { NavComponent } from "../components/NavComponent";
import { ILeaderBoardRoItemProps, LeaderBoardRoItem } from "../components/LeaderBoardRowItem";

export interface IHomeProps {
}

export function LeaderBoard(props: IHomeProps) {
  const leaderBoardItems: ILeaderBoardRoItemProps[] = [
    {
      position: 1,
      imageUrl: "download.jpeg",
      teamName: "Team 1",
      time: "03:27:13h"
    },
    {
      position: 2,
      imageUrl: "download.jpeg",
      teamName: "Team 2",
      time: "03:27:13h"
    },
    {
      position: 3,
      imageUrl: "download.jpeg",
      teamName: "Team 3",
      time: "03:27:13h"
    },
    {
      position: 4,
      imageUrl: "download.jpeg",
      teamName: "Team 4",
      time: "03:27:13h"
    },
    {
      position: 5,
      imageUrl: "download.jpeg",
      teamName: "Team 5",
      time: "03:27:13h"
    },
    {
      position: 6,
      imageUrl: "download.jpeg",
      teamName: "Team 6",
      time: "03:27:13h"
    }
  ]

  return (
    <div>
      {leaderBoardItems.map(value => <LeaderBoardRoItem {...value}></LeaderBoardRoItem>)}
    </div>
  );
}