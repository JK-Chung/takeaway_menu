import Button from "@material-ui/core/Button";
import React from "react";

const BaseButton = props => {
    const baseButtonStyle = {
        "height": "20px",
        "width": "20px",
        "color": "white",
        "borderStyle": "none",

        // Override material-ui button styles affecting the button size we want
        "minWidth": "0px",
        "padding": "0px"
    };

    const baseButtonContentStyle = {
        "height": "15px",
        "width": "15px"
    };

    return (
        <Button style={{...baseButtonStyle, ...props.style}} onClick={props.onClick}>
            { React.cloneElement(props.children, {style: baseButtonContentStyle, ...props.children.style}) }
        </Button>
    )
};

export default BaseButton;