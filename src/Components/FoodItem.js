import React from "react";
import Typography from "@material-ui/core/Typography";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import CounterTextField from "./CounterTextField/CounterTextField";
import AddButton from "./Components/AddButton";

const generateTotalPriceUIComponent = (foodItem, quantity) => {
    return (
        <Typography variant="body1" style={{"display": "inline"}}>
            {"£" + (foodItem.price * quantity).toFixed(2)}
        </Typography>
    )
};

export default props => {
    const {id, name, price} = props.foodItem;
    const [quantity, setQuantity] = React.useState(0);

    const tableCellStyle = {
        "white-space": "nowrap"
    };
    return(
        <TableRow>
            <TableCell style={{...tableCellStyle}} align="right">{id}</TableCell>
            <TableCell style={{...tableCellStyle, "width": "100%"}} align="left">{name}</TableCell>
            <TableCell style={{...tableCellStyle}}> {"£" + price.toFixed(2)}</TableCell>
            <TableCell style={{...tableCellStyle}}>
                <CounterTextField callbackToReceiveCounter={ setQuantity }/>
            </TableCell>
            <TableCell>{quantity}</TableCell>
            <TableCell><AddButton style={{"backgroundColor": quantity === 0 ? "lightgray" : "blue"}}/></TableCell>
        </TableRow>
    )
}