import React from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const buttonStyles = {
    "marginLeft": "5px",
    "marginRight": "5px"
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
        <React.Fragment>
            { generateButton("Menu", {...buttonStyles, "marginLeft": "auto"}) }
            { generateButton("Contact us", buttonStyles) }
        </React.Fragment>

    )
}