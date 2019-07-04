import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

import { HomeButton, PageButtons } from "."

const PageButtonsPosition = {
    "position": "absolute",
    "right": "0px"
};

export default props => {
    return ( <div>
        <AppBar position="static">
            <Toolbar>
                <HomeButton />
                <PageButtons style={PageButtonsPosition}/>
            </Toolbar>
        </AppBar>
    </div>
    )
}