//This will have navication an log in information

import React,{ useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom';
import PublishContent from './Forms/PublishContent';

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

    const [menuOpen, flipMenu] = useState(false);
    const [userName, setName] = useState("ByronGD");
    const [loggedIn, validateLogin] = useState(true)
    const history = useHistory();

    const changePage = (page,history) =>{
        console.log(page);
        history.push('/PublishContent');
    };

    const drawerItems = () =>(
        <div>
            <List>
                {['PublishContent', 'Following', 'Followers', 'Profile'].map((text) =>(
                    <ListItem button key={text} onClick={()=>{changePage(text)}}>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    console.log(menuOpen);

    return(
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => flipMenu(!menuOpen)}>
                    <MenuIcon/>
                </IconButton>
                <Drawer anchor={'left'} open={menuOpen} onClose={()=>{flipMenu(!menuOpen)}}>
                    {drawerItems()}
                </Drawer>
                <Typography variant="h6" className={classes.title}>
                Welcome {userName}
                </Typography>
                {loggedIn ? 
                <Button color="inherit" onClick={()=>validateLogin(!loggedIn)}>Logout</Button>
                :
                <Button color="inherit" onClick={()=>validateLogin(!loggedIn)}>Login</Button>
                }
                
            </Toolbar>
            </AppBar>
        </div>
    );
};


export default Header;