import { Avatar, Button, Card, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import './LeaderBoardRowItem.css';


export interface ILeaderBoardRoItemProps {
    position: number,
    imageUrl: string,
    teamName: string,
    time: string
}

export function LeaderBoardRoItem(props: ILeaderBoardRoItemProps) {
    return (
        <div className="leader-row-item">
            <Grid container spacing={0} alignContent={'flex-end'}>
                <Grid item xs={1} display="flex" justifyContent="center" alignItems="center">
                    <div className="leader-row-item">{props.position}.</div>
                </Grid>
                <Grid item xs={2}>
                    <div className="leader-row-item"><Avatar alt={props.teamName} src={props.imageUrl} /></div>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="center" alignItems="center">
                    <div className="leader-row-item">
                        {props.teamName}
                    </div>
                </Grid>
                <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                    <div className='leader-row-item'>
                        {props.time}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
