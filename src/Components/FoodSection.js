import React from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import FoodItem from "./FoodItem";

const useStyles = makeStyles(theme => ({
    paper: {
        "width": "90%",
        "marginTop": "10px",
        "marginLeft": "auto",
        "marginBottom": "10px",
        "marginRight": "auto",

        "paddingBottom": "5px"
    }
}));

const convertMenuDataToOrderedList = menuData => {
    let i = 0;
    return (
        <ul>
            { menuData.map(foodItem => <FoodItem key={i++} foodItem={foodItem} />) }
        </ul>
    )
};

export default props => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <AppBar position="static" style={{"marginBottom": "5px"}}>
                <Toolbar>
                    { props.sectionName }
                </Toolbar>
            </AppBar>
            { convertMenuDataToOrderedList(props.menuData) }
        </Paper>
    )
};