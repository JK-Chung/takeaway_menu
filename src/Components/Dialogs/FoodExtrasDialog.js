import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {ListItemIcon} from "@material-ui/core";
import CounterTextField from "../CounterTextField/CounterTextField";
import StylisedDialog from "../common/StylisedDialog";

const extras = ["Fried Rice", "Boiled Rice", "Chips", "Noodles"];

class FoodExtrasDialog extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            friedRice: 0,
            boiledRice: 0,
            chips: 0,
            noodles: 0
        }
    }

    updateExtraQuantity(extraName, doIncrement) {
        if(doIncrement) {

        }
    }

    getTotalQuantitySelected() {
        const {friedRice, boiledRice, chips, noodles } = this.state;
        return friedRice + boiledRice + chips + noodles;
    }

    getComponentFromExtra(extraName, quantity, callbackToUpdateExtraQuantity, secondary="") {
        return (
            <ListItem>
                <ListItemIcon>
                    <CounterTextField callbackToReceiveCounter={callbackToUpdateExtraQuantity}/>
                </ListItemIcon>
                <ListItemText primary={extraName} secondary={secondary} />
                <p style={{"display": "block", "float": "right"}}>{quantity}</p>
            </ListItem>
        )
    }

    render() {
        return (
            <StylisedDialog title="Select your extras" {...this.props}>
                <CounterTextField />
                { this.getComponentFromExtra("Fried Rice", 0, () => console.log()) }
            </StylisedDialog>
        )
    }
}

export default FoodExtrasDialog;