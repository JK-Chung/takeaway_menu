import React from "react";

import MinusButton from "./MinusButton";
import TextField from "./TextField";
import PlusButton from "./PlusButton";

const useQuantity = (onChange = () => {}) => {
    const [quantity, setQuantity] = React.useState(0);
    React.useEffect(() => onChange(quantity));

    const decrementQuantity = () => {
        if(quantity !== 0)
            setQuantity(prevQuantity => prevQuantity - 1);
    };

    const incrementQuantity = () => {
        if(quantity !== 99)
            setQuantity(prevQuantity => prevQuantity + 1);
    };

    return { quantity, decrementQuantity, incrementQuantity }
};

const CounterTextField = props => {
    const { quantity, decrementQuantity, incrementQuantity } = useQuantity();
    const buttonRef = React.createRef();

    const { height } = props;

    const buttonWidthToOverallWidth =  1 / 3.5;
    const textFieldWidthToOverallWidth = 1.5 / 3.5;

    const style = {
        button: {
            "height": "100%",
            "width": `calc(100% * ${buttonWidthToOverallWidth})`
        },
        textField: {
            "height": "100%",
            "width": `calc(100% * ${textFieldWidthToOverallWidth})`,
            "fontSize": "10vh"
        }
    };
    console.log(buttonRef.current);

    return (
        <div style={{"height": height, "width": `calc(${height}) * 3.5`}}>
            <MinusButton style={style.button} onClick={ decrementQuantity }/>
            <TextField style={style.textField} value={quantity} />
            <PlusButton style={style.button} onClick={ incrementQuantity } />
        </div>
    )
};

CounterTextField.defaultProps = {
    "height": "5rem"
};

export default CounterTextField;