import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import SidesSetter from "./SidesSetter";
import QuantitySetter from "./QuantitySetter";
import StepperHeader from "./StepperHeader";

const useFoodState = () => {
    const [ quantity, setQuantity ] = React.useState(0);

    return {
        quantity, setQuantity
    }
};

const generateDialogSteps = foodState => (
    [
        {
            label: "Quantity",
            stepperContent: <QuantitySetter initialQuantity={foodState.quantity} onChange={foodState.setQuantity}/>
        },
        {
            label: "Sides",
            stepperContent: <SidesSetter />
        },
        {
            label: "Extras",
            stepperContent: <React.Fragment/>
        }
    ]
);

const AddFoodDialog = props => {
    const foodState = useFoodState();

    const [activeDialogStep, setActiveDialogStep] = React.useState(0);
    const dialogSteps = generateDialogSteps(foodState);
    return (
        <Dialog open={props.open} onClose={props.onClose} fullWidth classes={{paper: props.classes.paper}}>
            <StepperHeader activeStep={activeDialogStep} steps={dialogSteps} title={props.foodItem.name}/>

            <DialogContent dividers>
                <Container style={{"height": "40vh"}} align="center" maxWidth="xl">
                    { dialogSteps[activeDialogStep].stepperContent }
                </Container>
            </DialogContent>

            <DialogContent>
                <Button onClick={() => setActiveDialogStep(activeDialogStep - 1)}
                        variant="outlined" color="primary"
                        style={{"float": "left"}}
                        disabled={activeDialogStep === 0}
                >
                    Previous
                </Button>
                <Button onClick={() => setActiveDialogStep(activeDialogStep + 1)}
                        variant="contained" color="primary"
                        style={{"float": "right"}}
                        disabled={activeDialogStep === dialogSteps.length - 1}
                >
                    Next
                </Button>
            </DialogContent>
        </Dialog>
    )
};

AddFoodDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,

    foodItem: PropTypes.object.isRequired,

    classes: PropTypes.object
};

const styles = {
    paper: {
        // The following properties auto adjusts the height of the dialog to fit its content
        "display": "table",
        "margin": "0"
    }
};

export default withStyles(styles)(AddFoodDialog);