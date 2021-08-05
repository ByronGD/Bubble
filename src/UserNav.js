//This is the users basic navigation

import React from "react";
import { Button } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import DomsFace from './Images/DomsFace.jpg'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutline';


const styles = makeStyles((theme)=>({

    small_avatar:{
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large_avatar:{
        margin:'auto',
        marginTop:'25px',
        marginBottom:'25px',
        border: '0.1px solid lightgray',
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    nav_button:{
        textAlign:'right',
        marginRight:'30px'
    },
    nav_pannel:{
        marginTop:'25PX',
        marginBottom:'25PX',
    },
})) ;

const UserNav = () =>{

    let history = useHistory();
    const classes = styles();
    function changePage(route){
        
        history.push(route);
    };

    return (
        <React.Fragment>      
            <Paper style={{height:'100vh'}}>    
                    <Avatar className={classes.large_avatar} alt="DomsFace" src={DomsFace} style={{alignSelf:'center'}}/>
                    <div className={classes.nav_button} >
                        <Button onClick={()=>changePage('/profilesettings')}>
                           <b>Profile settings</b>&nbsp;<SettingsOutlinedIcon/>
                        </Button>
                        <br/>
                        <Button onClick={()=>changePage('/publishcontent')}>
                            <b>Publish Content</b>&nbsp;<PublishOutlinedIcon/>
                        </Button>
                        <br/>
                        <Button onClick={()=>changePage('/following')}>
                            <b>Following</b>&nbsp;<PersonAddOutlinedIcon/>
                        </Button>
                        <br/>
                        <Button onClick={()=>changePage('/followers')}>
                            <b>Followers</b>&nbsp;<PeopleOutlinedIcon/>
                        </Button>  
                    </div>

            </Paper>
        </React.Fragment>
    );
};

export default UserNav;