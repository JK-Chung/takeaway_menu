import React from "react";
import BaseButton from "../common/BaseButton";
import AddIcon from "@material-ui/icons/Add";

const PlusButton = props => {
    const plusButtonStyle = {
        "backgroundColor": "green",
        "borderBottomLeftRadius": "0px",
        "borderTopLeftRadius": "0px"
    };

    return (
        <BaseButton height={props.height} width={props.height} style={plusButtonStyle} onClick={props.onClick} >
            <AddIcon />
        </BaseButton>
    );
};

export default PlusButton;