import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import QuantitySetter from "./QuantitySetter";

const steps = [
    {
        title: "Select Quantity",
        generateContent: null
    },
    {
        title: "Select Sides",
        generateContent: null
    }
];

const labelToStepComponent = label => (
    <Step key={label}>
        <StepLabel>{label}</StepLabel>
    </Step>
);

const AddFoodDialog = props => {
    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <Stepper activeStep={activeStep}>
                { steps.map(({title}) => labelToStepComponent(title)) }
            </Stepper>
            <QuantitySetter />
        </Dialog>
    )
};

export default AddFoodDialog;