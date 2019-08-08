import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Typography} from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";

const StepperHeader = props => {
    const labelToStepComponent = label => (
        <Step key={label}>
            <StepLabel>{label}</StepLabel>
        </Step>
    );

    const { steps } = props;
    return (
        <React.Fragment>
            <AppBar position="static" color="primary">
                <Toolbar variant="dense">
                    <Typography variant="subtitle1" color="inherit">
                        { props.title }
                    </Typography>
                </Toolbar>
            </AppBar>
            <Stepper activeStep={props.activeStep}>
                { steps.map(({label}) => labelToStepComponent(label)) }
            </Stepper>
        </React.Fragment>
    );
};

export default StepperHeader;