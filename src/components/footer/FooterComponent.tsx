import * as React from 'react';
import { XDexComponent } from './XDexComponent';
import { Grid } from '@mui/material';
import { MapComponent } from './MapComponent';

export interface IFooterComponentProps {
}

export function FooterComponent(props: IFooterComponentProps) {
    return (
        <Grid container className="footer-row">
            <Grid xs={3} className='footer-map'><MapComponent /></Grid>
            <Grid xs={6} className='footer-xdex'><XDexComponent /></Grid>
            <Grid xs={3}></Grid>
        </Grid>
    );
}
