import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import CounterTextField from "../common/CounterTextField/CounterTextField";

const steps = [
    {
        label: "Quantity",
        stepperContent:
            <React.Fragment>
                <Typography color="primary" variant="h5" style={{"margin": "2vh"}}>
                    How many portions would you like?
                </Typography>
                <CounterTextField />
            </React.Fragment>
    },
    {
        label: "Sides",
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
            <DialogContent>
                <Button variant="contained" color="primary" onClick={() => setActiveStep(activeStep + 1)}>
                    Next
                </Button>
            </DialogContent>
        </Dialog>
    )
};

export default AddFoodDialog;