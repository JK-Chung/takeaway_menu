import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const style = {
    "width": "90%"
};

export default props => {
    return (
        <Paper style={style}>
            <Typography variant="body1">
                {props.foodName}
            </Typography>
        </Paper>
    )
}

