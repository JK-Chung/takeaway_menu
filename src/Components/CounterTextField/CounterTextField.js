import React, {useState} from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import BaseButton from "../Components/BaseButton";

const MinusButton = props => {
    const minusButtonStyle = {
        "backgroundColor": "red",
        "borderBottomRightRadius": "0px",
        "borderTopRightRadius": "0px"
    };

    return (
        <BaseButton onClick={props.onClick} style={minusButtonStyle}>
            <RemoveIcon />
        </BaseButton>
    );
};

const PlusButton = props => {
    const plusButtonStyle = {
        "backgroundColor": "green",
        "borderBottomLeftRadius": "0px",
        "borderTopLeftRadius": "0px"
    };

    return (
        <BaseButton onClick={props.onClick} style={plusButtonStyle}>
            <AddIcon />
        </BaseButton>
    );
};

const TextField = props => {
    return (
        <input
            autoFocus={true}
            value={props.value}
            disabled={true}
            style={{
                "height": "20px",
                "width": "30px",
                "border": "none",
                "padding": "0px",
                "textAlign": "center",
                "color": "black",

                // For some reason, the textfield won't line up with the buttons
                "position": "relative",
                "top": "1.4px"
            }}
        />
    )
};

export default props => {
    return (
        <div style={props.style}>
            <MinusButton onClick={ props.onDecrement } />
            <TextField value={props.value} />
            <PlusButton onClick={ props.onIncrement } />
        </div>
    )
};