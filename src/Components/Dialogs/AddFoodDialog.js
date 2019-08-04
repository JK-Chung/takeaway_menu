import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import QuantitySetter from "./QuantitySetter";
import {DialogContentText} from "@material-ui/core";
import Container from "@material-ui/core/Container";

const steps = [
    {
        label: "Select Quantity",
        stepperContent: <QuantitySetter />
    },
    {
        label: "Select Sides",
        stepperContent: null
    }
];

const StepperHeader = props => {
    const labelToStepComponent = label => (
        <Step key={label}>
            <StepLabel>{ label }</StepLabel>
        </Step>
    );

    return (
        <Stepper activeStep={props.activeStep}>
          { steps.map(({label}) => labelToStepComponent(label)) }
        </Stepper>
    );
};

const AddFoodDialog = props => {
    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <Dialog open={props.open} onClose={props.onClose} fullWidth>
            <StepperHeader activeStep={activeStep} />

            <DialogContent dividers>
                <Container style={{"height": "40vh"}} align="center" maxWidth="xl">
                    { steps[activeStep].stepperContent }
                </Container>
            </DialogContent>
        </Dialog>
    )
};

export default AddFoodDialog;