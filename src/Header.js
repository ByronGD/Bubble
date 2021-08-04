//This will have navication an log in information

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header =()=>{

    const classes = useStyles();
    let history = useHistory();

    function changePage(route){
        
        history.push(route);
    };

    return(
        <div className={classes.root}>
                <Paper square>
                    <Button onClick={()=>changePage('/')}>
                        <b>My Bubble</b>
                    </Button>
                </Paper>


        </div>
    );
};


export default Header;