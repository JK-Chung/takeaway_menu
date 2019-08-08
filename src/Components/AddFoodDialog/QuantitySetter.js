import React from "react";
import {Typography} from "@material-ui/core";
import CounterTextField from "../common/CounterTextField/CounterTextField";

const QuantitySetter = props => {
    const { initialQuantity, onChange } = props;
    return (
        <React.Fragment>
            <Typography color="primary" variant="h5" style={{"margin": "2vh"}}>
                How many portions would you like?
            </Typography>
            <CounterTextField initialValue={initialQuantity} onChange={onChange}/>
        </React.Fragment>
    )
};

export default QuantitySetter;