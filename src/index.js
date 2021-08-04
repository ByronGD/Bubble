import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './LandingPage';
import reportWebVitals from './reportWebVitals';
import Header from './Header'
import AppBody from './RouteManager'
import { BrowserRouter as Router } from 'react-router-dom';
import UserNav from './UserNav';
import Grid from '@material-ui/core/Grid'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Grid container>
        <Grid item xs={2}>
          <UserNav/>
        </Grid>
        <Grid item xs={7}>
            <Header/>
            <AppBody/>
        </Grid>
        <Grid item xs={2}>
          
        </Grid>
      </Grid>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
