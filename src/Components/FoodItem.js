import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import CounterTextField from "./CounterTextField/CounterTextField";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    grid: {
        "flewGrow": 1
    },
    paper: {
        "width": "90%",
        "marginTop": "10px",
        "marginLeft": "auto",
        "marginBottom": "10px",
        "marginRight": "auto",

        "padding": "5px"
    }
}));

export default props => {
    const classes = useStyles();

    return(
        <Paper className={classes.paper}>
            <Typography variant="body1" style={{"display": "inline"}}>
                {props.foodName}
            </Typography>
            <CounterTextField style={{"float": "right"}} />
        </Paper>
    )
}