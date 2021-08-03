// This will be the main logic for routing

import React from "react";
import ProtedView from "./ProtectedView";
import PublishContent from "./Forms/PublishContent";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Following from "./Forms/Following";

export default () =>{

    return(
        <Switch>
            <ProtedView exact path='/' permission='public'>
                <LandingPage/>
            </ProtedView>
            <ProtedView path='/publishcontent' permission='public'>
                <PublishContent/>
            </ProtedView>
            <ProtedView path='/publishcontent' permission='public'>
                <PublishContent/>
            </ProtedView>
            <ProtedView path='/following' permission='public'>
                <Following/>
            </ProtedView>
        </Switch>
    )
};
