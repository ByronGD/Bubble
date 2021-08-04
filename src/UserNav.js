//This is the users basic navigation

import React from "react";
import { Button } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import DomsFace from './Images/DomsFace.jpg'


const styles = makeStyles((theme)=>({

    small_avitar:{
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large_avitar:{
        align:'center',
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    nav_button:{
        marginRight:'30px'
    },
    nav_pannel:{
        marginTop:'25PX',
        marginBottom:'25PX',
    },
})) ;

const UserNav = () =>{
    //user avitar
    //Publish content
    //following
    //followers

    let history = useHistory();
    const classes = styles();
    function changePage(route){
        
        history.push(route);
    };

    return (
        <React.Fragment>      
            <Paper style={{height:'100%'}}>    
                    <Avatar className={classes.large_avitar} alt="DomsFace" src={DomsFace} style={{alignSelf:'center'}}/>
                    <div className={classes.nav_button} >
                        <Button onClick={()=>changePage('/profilesettings')}>
                           <b>Profile settings</b> 
                        </Button>
                        <br/>
                        <Button onClick={()=>changePage('/publishcontent')}>
                            <b>Publish Content</b> 
                        </Button>
                        <br/>
                        <Button onClick={()=>changePage('/following')}>
                            <b>Following</b>   
                        </Button>
                        <br/>
                        <Button onClick={()=>changePage('/followers')}>
                            <b>Followers</b>  
                        </Button>  
                    </div>

            </Paper>
        </React.Fragment>
    );
};

export default UserNav;