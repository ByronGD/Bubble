// This will be the main logic for routing

import React from "react";
import ProtedView from "./ProtectedView";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import PublishContent from "./Forms/PublishContent";
import Following from "./Forms/Following";
import ProfileSettings from "./Forms/ProfileSettings";
import Followers from "./Forms/Followers";

export default () =>{

    const user = "DOM"

    return(
        <Switch>
            <ProtedView exact path='/' permission='public'>
                <LandingPage/>
            </ProtedView>
            <ProtedView path='/profilesettings' permission='public'>
                <ProfileSettings/>
            </ProtedView>
            <ProtedView path='/publishcontent' permission='public'>
                <PublishContent/>
            </ProtedView>
            <ProtedView path='/following' permission='public'>
                <Following/>
            </ProtedView>
            <ProtedView path='/followers' permission='public'>
                <Followers/>
            </ProtedView>
        </Switch>
    )
};
