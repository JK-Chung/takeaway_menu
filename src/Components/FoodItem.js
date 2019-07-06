import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CounterTextField from "./IncrementDecrement/CounterTextField";

const style = {
    "width": "90%",
    "marginTop": "10px",
    "marginLeft": "auto",
    "marginBottom": "10px",
    "marginRight": "auto",

    "padding": "5px"
};

export default props => {
    return (
        <Paper style={style}>
            <Typography variant="body1">
                {props.foodName}
            </Typography>
            <CounterTextField />
        </Paper>
    )
}

