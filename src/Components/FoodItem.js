import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import AddButton from "./common/AddButton";
import AddFoodDialog from "./Dialogs/AddFoodDialog";

const FoodItem = props => {
    const {id, name, price} = props.foodItem;
    const [quantity, setQuantity] = React.useState(0);
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    const tableCellStyle = {
        "whiteSpace": "nowrap"
    };
    return(
        <TableRow hover>
            <TableCell style={{...tableCellStyle}} align="right">{id}</TableCell>
            <TableCell style={{...tableCellStyle, "width": "100%"}} align="left">{name}</TableCell>
            <TableCell style={{...tableCellStyle}}> {"£" + price.toFixed(2)}</TableCell>
            <TableCell><AddButton onClick={() => setIsDialogOpen(true)} style={{"backgroundColor": quantity === 0 ? "lightgray" : "blue"}}/></TableCell>
            <AddFoodDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} foodItem={props.foodItem}/>
        </TableRow>
    )
};

export default FoodItem;