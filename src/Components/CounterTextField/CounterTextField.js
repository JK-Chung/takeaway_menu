import React from "react";
import PropTypes from "prop-types";

import MinusButton from "./MinusButton";
import TextField from "./TextField";
import PlusButton from "./PlusButton";

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