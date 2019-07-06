import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import { makeStyles } from '@material-ui/core/styles';

const height = "20px";

const useStyles = makeStyles(theme => ({
    button: {
        "height": height,
        "width": height,
        "color": "white",
        "borderStyle": "none",

        // Override material-ui button styles affecting the button size we want
        "minWidth": "0px",
        "padding": "0px"
    },
    buttonContent: {
        "height": "15px",
        "width": "15px"
    }
}));

const MinusButton = props => {
    const classes = useStyles();

    const buttonStyle = {
        "backgroundColor": "red",
        "borderBottomRightRadius": "0px",
        "borderTopRightRadius": "0px"
    };

    return (
        <Button variant="contained" className={classes.button} style={buttonStyle} onClick={props.onClick}>
            <RemoveIcon className={classes.buttonContent}/>
        </Button>
    );
};

const PlusButton = props => {
    const classes = useStyles();

    const buttonStyle = {
        "backgroundColor": "green",
        "borderBottomLeftRadius": "0px",
        "borderTopLeftRadius": "0px"
    };

    return (
        <Button variant="contained" className={classes.button} style={buttonStyle} onClick={props.onClick}>
            <AddIcon className={classes.buttonContent}/>
        </Button>
    );
};

const TextField = props => {
    return (
        <input
            autoFocus={true}
            value={props.value}
            disabled={true}
            style={{
                "height": "20px",
                "width": "30px",
                "borderWidth": "0px",
                "padding": "0px",
                "textAlign": "center",
                "color": "black",
                "boxShadow": "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px " +
                    "rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",

                // For some reason, the textfield won't line up with the buttons
                "position": "relative",
                "top": "1px"
            }}
        />
    )
};

export default props => {
    const [counter, setCounter] = useState(0);

    const decrementCounter = () => {
        if(counter !== 0)
            setCounter(counter - 1);
    } ;
    const incrementCounter = () => {
        if(counter !== 99)
            setCounter(counter + 1);
    };

    return (
        <React.Fragment>
            <MinusButton onClick={ decrementCounter }/>
            <TextField value={counter}/>
            <PlusButton onClick={ incrementCounter }/>
        </React.Fragment>
    )
}