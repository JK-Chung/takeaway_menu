import React from "react";
import MinusButton from "./MinusButton";
import TextField from "./TextField";
import PlusButton from "./PlusButton";

const useQuantity = (initialValue, onChange) => {
    const [quantity, setQuantity] = React.useState(initialValue);
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

const style = {
    button: {
        "height": "7vh",
        "width": "7vh"
    },
    textField: {
        "height": "7vh",
        "width": "10vh",
        "fontSize": "5vh"
    }
};

const CounterTextField = props => {
    const { quantity, decrementQuantity, incrementQuantity } = useQuantity(props.initialValue, props.onChange);

    return (
        <div>
            <MinusButton style={style.button} onClick={ decrementQuantity }/>
            <TextField style={style.textField} value={quantity} />
            <PlusButton style={style.button} onClick={ incrementQuantity } />
        </div>
    )
};

CounterTextField.defaultProps = {
    initialValue: 0,
    onChange: () => {}
};

export default CounterTextField;