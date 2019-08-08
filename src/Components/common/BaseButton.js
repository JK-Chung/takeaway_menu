import React from "react";
import Button from "@material-ui/core/Button";

const BaseButton = props => {
    const baseButtonStyle = {
        "height": "1.2rem",
        "width": "1.2rem",
        "color": "white",
        "borderStyle": "none",
        "borderRadius": "20%",

        // Override material-ui button styles affecting the button size we want
        "minWidth": "0rem",
        "padding": "0rem"
    };

    const baseButtonContentStyle = {
        "height": "75%",
        "width": "75%"
    };

    return (
        <Button style={{...baseButtonStyle, ...props.style}} onClick={props.onClick}>
            { React.cloneElement(props.children, {style: baseButtonContentStyle, ...props.children.style}) }
        </Button>
    )
};

export default BaseButton;