import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import BaseButton from "../Components/BaseButton";
import PropTypes from "prop-types";

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
                "fontSize": `calc(${props.height} * 0.6)`,

                // This ensures that the input lines up with the buttons
                "verticalAlign": "middle"
            }}
        />
    )
};

const useQuantity = ( onChange = function() {} ) => {
    const [quantity, setQuantity] = React.useState(0);
    React.useEffect(() => onChange(quantity));

    const decrementQuantity = () => {
        if(quantity !== 0)
            setQuantity(prevQuantity => --prevQuantity);
    };

    const incrementQuantity = () => {
        if(quantity !== 99)
            setQuantity(prevQuantity => ++prevQuantity);
    };

    return { quantity, decrementQuantity, incrementQuantity }
};

const CounterTextField = props => {
    const { quantity, decrementQuantity, incrementQuantity } = useQuantity(props.onChange);

    const { height } = props;
    const inputLength = `calc(${props.width} - (2 * ${height}))`;

    return (
        <div>
            <MinusButton height={height} onClick={ decrementQuantity } />
            <TextField height={height} width={inputLength} value={quantity} />
            <PlusButton height={height} onClick={ incrementQuantity } />
        </div>
    )
};

CounterTextField.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string
};

CounterTextField.defaultProps = {
    height: "20px",
    width: "70px"
};

export default CounterTextField;