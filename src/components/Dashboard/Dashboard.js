import React from 'react';
import DashNavBar from './DashNavBar'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const Dashboard = ({onRouteChange}) => {
    return(
        <div className='dashboard'>
            <Paper style={{height: '500px'}}>
                <DashNavBar onRouteChange={onRouteChange}/>
                <Typography variant='h4' component='h2' style={{marginTop: '1rem'}}>Welcome User</Typography>
                <Typography component='p' style={{marginTop: '1rem'}}>Here Is Your Dashboard</Typography>
            </Paper>
        </div>
    )
}

export default Dashboard