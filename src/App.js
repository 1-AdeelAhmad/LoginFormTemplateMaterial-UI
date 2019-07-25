import React from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      route: 'login'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render(){
    return (
      <div className='App'>

      {
      this.state.route === 'dashboard' 
      
        ? <Grid container spacing={2} justify='center'>
            <Grid item xs={8}>
              <Dashboard onRouteChange={this.onRouteChange}/>
            </Grid>
          </Grid>
        :
        (
          this.state.route === 'login' 
          ? <Login onRouteChange={this.onRouteChange}/>
          : <Register onRouteChange={this.onRouteChange}/>
        )
         

        
      }

      </div>
    );
  }
}

export default App;
