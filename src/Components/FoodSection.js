import React from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import FoodItem from "./FoodItem";

const useStyles = makeStyles(theme => ({
    paper: {
        "width": "90%",
        "marginTop": "10px",
        "marginLeft": "auto",
        "marginBottom": "10px",
        "marginRight": "auto",
    }
}));

const convertFoodDataToUIComponenents = foodData => {
    return (
        <TableBody>
            { foodData.map((foodItem, index) => <FoodItem key={index} foodItem={foodItem} />) }
        </TableBody>
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
            <Table>
                { convertFoodDataToUIComponenents(props.foodData) }
            </Table>
        </Paper>
    )
};