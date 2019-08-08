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
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SidesSetter from "./SidesSetter";

const generateSteps = foodItem => {
    const {name} = foodItem;
    return (
        [
            {
                label: "Quantity",
                stepperContent:
                    <React.Fragment>
                        <Typography color="primary" variant="h5" style={{"margin": "2vh"}}>
                            How many portions of would you like?
                        </Typography>
                        <CounterTextField/>
                    </React.Fragment>
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
    )
};

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
                        {props.foodItem.name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Stepper activeStep={props.activeStep}>
                { steps.map(({label}) => labelToStepComponent(label)) }
            </Stepper>
        </React.Fragment>
    );
};

const AddFoodDialog = props => {
    const [activeStep, setActiveStep] = React.useState(0);

    const { foodItem } = props;
    const dialogSteps = generateSteps(foodItem);
    return (
        <Dialog open={props.open} onClose={props.onClose} fullWidth classes={{paper: props.classes.paper}}>
            <StepperHeader activeStep={activeStep} steps={dialogSteps} foodItem={foodItem}/>

            <DialogContent dividers>
                <Container style={{"height": "40vh"}} align="center" maxWidth="xl">
                    { dialogSteps[activeStep].stepperContent }
                </Container>
            </DialogContent>

            <DialogContent>
                <Button onClick={() => setActiveStep(activeStep + 1)}
                        variant="contained" color="primary"
                        style={{"float": "right"}}
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
        // The following auto adjusts the height of the dialog to fit its content
        "display": "table",
        "margin": "0"
    }
};

export default withStyles(styles)(AddFoodDialog);