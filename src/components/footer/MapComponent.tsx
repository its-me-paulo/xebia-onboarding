import { Avatar } from '@mui/material';
import * as React from 'react';

export interface IMapComponentProps {
}

export function MapComponent (props: IMapComponentProps) {
  return (
    <div className="map-background" style={{borderRadius: "100%", backgroundColor: "white", width: "15vh", height: "15vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Avatar alt="pac-man" src="Pacman.svg.png" sx={{ width: "10vh", height: "10vh" }} />
    </div>
  );
}
