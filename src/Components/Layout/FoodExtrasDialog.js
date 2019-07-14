import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {ListItemIcon} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const FoodExtrasDialog = props => {
    return (
        <Dialog {...props}>
            <DialogTitle>Select your extras</DialogTitle>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Fried Rice" />
                </ListItem>
            </List>
        </Dialog>
    )
};

export default FoodExtrasDialog;