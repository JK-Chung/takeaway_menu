import React from "react";
import {Typography} from "@material-ui/core";
import PropTypes from "prop-types";

const DialogContentTitle = ({children}) => (
    <Typography color="primary" variant="h5" style={{"margin": "2vh"}}>
        { children }
    </Typography>
);

DialogContentTitle.propTypes = {
    children: PropTypes.string.isRequired
};

export default DialogContentTitle;