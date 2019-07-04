import React from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const buttonStyles = {
    "margin-left": "5px",
    "margin-right": "5px"
};

const generateButton = (text, style) => {
    return (
        <Button color="inherit" style={style}>
            <Typography variant="button">
                {text}
            </Typography>
        </Button>
    )
};

export default props => {
    return (
        <React.Fragment >
            { generateButton("Menu", {...buttonStyles, "margin-left": "auto"}) }
            { generateButton("Contact us", buttonStyles) }
        </React.Fragment>

    )
}