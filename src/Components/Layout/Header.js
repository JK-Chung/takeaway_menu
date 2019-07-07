import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const HomeButton = props => {
    return (
        <Button edge="start" color="inherit">
            <Typography variant="h5" >
                The Chung Lee House Takeaway
            </Typography>
        </Button>
    )
};

const PageButtons = props => {
    const BaseButton = props => {
        return (
            <Button color="inherit" style={{ "marginLeft": "5px", "marginRight": "5px" }}>
                <Typography variant="button">
                    { props.text }
                </Typography>
            </Button>
        )
    };

    return (
        <div style={props.style}>
            <BaseButton text="Menu" />
            <BaseButton text="Contact Us" />
        </div>
    )
};

export default props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <div style={{ "display": "flex" }}>
                <HomeButton />
                <PageButtons style={{ "position": "absolute", "right": "0px" }}/>
                </div>
            </Toolbar>
        </AppBar>
    )
};