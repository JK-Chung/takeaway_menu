import React from "react";
import CounterTextField from "../CounterTextField/CounterTextField";

const QuantitySetter = props => {
    const [quantity, setQuantity] = React.useState(0);
    React.useEffect(() => console.log("FROM QUANTITYSETTER", quantity));
    return (
        <CounterTextField onChange={setQuantity} height="100px" width="400px"
        />
    )
};

export default QuantitySetter;