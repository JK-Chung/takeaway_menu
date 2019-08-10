import React from "react";
import {Typography} from "@material-ui/core";
import CounterTextField from "../common/CounterTextField/CounterTextField";
import DialogContentTitle from "./DialogContentTitle";

const QuantitySetter = props => {
    const { initialQuantity, onChange } = props;
    return (
        <React.Fragment>
            <DialogContentTitle>
                How many portions would you like?
            </DialogContentTitle>
            <CounterTextField initialValue={initialQuantity} onChange={onChange}/>
        </React.Fragment>
    )
};

export default QuantitySetter;