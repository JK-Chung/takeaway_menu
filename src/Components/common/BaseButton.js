import Button from "@material-ui/core/Button";
import React from "react";

const BaseButton = props => {
    const baseButtonStyle = {
        "height": props.height,
        "width": props.width,
        "color": "white",
        "borderStyle": "none",

        // Override material-ui button styles affecting the button size we want
        "minWidth": "0px",
        "padding": "0px"
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

BaseButton.defaultProps = {
    height: "20px",
    width: "20px"
};

export default BaseButton;