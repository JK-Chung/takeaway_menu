import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import CounterTextField from "./CounterTextField/CounterTextField";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    paper: {
        "marginLeft": "5px",
        "marginRight": "5px",
        "width": "auto",

        "padding": "5px",

        "borderRadius": "unset"
    }
}));

const generateTotalPriceUIComponent = (foodItem, total) => {
    if(total === 0)
        return "";

    return (
        <Typography variant="body1" style={{"display": "inline"}}>
            {"£" + (foodItem.price * total).toFixed(2)}
        </Typography>
    )
};

export default props => {
    const classes = useStyles();

    let total = 0;
    return(
        <Paper className={classes.paper}>
            <Grid container spacing={0}>
                <Grid item xs={8}>
                    <Typography variant="body1" style={{"display": "inline"}}>
                        {props.foodItem.name}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="body1" style={{"display": "inline"}}>
                        {"£" + props.foodItem.price.toFixed(2)}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <CounterTextField onChange={count => total = count}/>
                </Grid>
                {
                    generateTotalPriceUIComponent(props.foodItem, total)
                }
            </Grid>
        </Paper>
    )
}