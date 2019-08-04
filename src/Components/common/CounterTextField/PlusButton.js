import React from "react";
import AddIcon from "@material-ui/icons/Add";
import BaseButton from "../BaseButton";

const plusButtonStyle = {
    "backgroundColor": "green",
    "borderBottomLeftRadius": "0rem",
    "borderTopLeftRadius": "0rem"
};

const PlusButton = props => (
    <BaseButton style={{...plusButtonStyle, ...props.style}} onClick={props.onClick} >
        <AddIcon />
    </BaseButton>
);

export default PlusButton;