import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";

const StylisedDialog = props => {
    return (
        <Dialog fullWidth {...props}>
            <AppBar position="static">
                <DialogTitle>{ props.title }</DialogTitle>
            </AppBar>

            { props.children }
        </Dialog>
    )
};

export default StylisedDialog;