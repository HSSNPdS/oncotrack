import React from 'react';

import {Grid} from '../styles/components/DashboardGrid';

import DataOTY from './DataOTY';
import Help from './Help';
import Histogram from './Histogram';
import Map from './Map';
import Score from './Score';

//Exportação em typescript
const DashboardGrid: React.FC = () => { 
    return(
        <Grid>
            <DataOTY/>
            <Help/>
            <Histogram/>
            <Map/>
            <Score/>
        </Grid>
    );
};

export default DashboardGrid;