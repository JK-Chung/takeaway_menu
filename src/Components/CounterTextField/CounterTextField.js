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
        <BaseButton height={props.height} width={props.height} style={minusButtonStyle} onClick={props.onClick} >
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
        <BaseButton height={props.height} width={props.height} style={plusButtonStyle} onClick={props.onClick} >
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
                "height": props.height,
                "width": props.width,
                "border": "none",
                "padding": "0px",


                "textAlign": "center",
                "color": "black",
                "fontSize": props.height * 0.6,

                // This ensures that the input lines up with the buttons
                "verticalAlign": "middle"
            }}
        />
    )
};

const CounterTextField = props => {
    const { height } = props;
    const inputLength = props.width - (2 * height);

    return (
        <div>
            <MinusButton height={height} onClick={ props.onDecrement } />
            <TextField height={height} width={inputLength} value={props.value} />
            <PlusButton height={height} onClick={ props.onIncrement } />
        </div>
    )
};

CounterTextField.defaultProps = {
    height: 20,
    width: 70
};

export default CounterTextField;