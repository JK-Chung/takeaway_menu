import React from "react";
import BaseButton from "../common/BaseButton";
import RemoveIcon from "@material-ui/icons/Remove";

const MinusButton = props => {
    const minusButtonStyle = {
        "backgroundColor": "red",
        "borderBottomRightRadius": "0px",
        "borderTopRightRadius": "0px"
    };

    return (
        <BaseButton height={props.height} width={props.height} style={minusButtonStyle} onClick={props.onClick} >
            <RemoveIcon />
        </BaseButton>
    );
};

export default MinusButton;