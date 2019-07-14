import React from "react";
import StylisedDialog from "../Components/StylisedDialog";
import CounterTextField from "../CounterTextField/CounterTextField";

let quantity = 0;

const decrementQuantity = () => {

};

const incrementQuantity = () => {
    if(quantity !== 99)
        quantity++;
};

class FoodQuantityDialog extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {quantity: 0};

        this.decrementQuantity = this.decrementQuantity.bind(this);
        this.incrementQuantity = this.incrementQuantity.bind(this);
    }

    decrementQuantity() {
        if(this.state.quantity !== 0)
            this.setState({quantity: this.state.quantity - 1});
    }

    incrementQuantity() {
        if(this.state.quantity !== 99) {
            this.setState({quantity: this.state.quantity + 1});
        }
    }

    render() {
        return (
            <StylisedDialog title="Select your quantity" {...this.props}>
                <CounterTextField
                    onDecrement = { this.decrementQuantity }
                    value = { this.state.quantity }
                    onIncrement = { this.incrementQuantity }
                />
            </StylisedDialog>
        )
    }
};

export default FoodQuantityDialog;