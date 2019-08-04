import React from "react";
import BaseButton from "../BaseButton";
import RemoveIcon from "@material-ui/icons/Remove";

const minusButtonStyle = {
    "backgroundColor": "red",
    "borderBottomRightRadius": "0rem",
    "borderTopRightRadius": "0rem"
};

const MinusButton = props => (
    <BaseButton style={{...minusButtonStyle, ...props.style}} onClick={props.onClick} >
        <RemoveIcon />
    </BaseButton>
);

export default MinusButton;