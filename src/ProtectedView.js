// This will have the logic for limiting pages based on user rights

import { Route } from "react-router-dom";
import Validate from './ValidateLogin'


const ProtedView = ({children},...rest) =>{

        return (

            <Route {...rest} render={(permission)=>children}>
    
            </Route>
        )


};

export default ProtedView;