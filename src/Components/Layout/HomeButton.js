import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default props => {
    return (
        <Button edge="start" color="inherit" aria-label="Home">
            <Typography variant="h5" >
                The Chung Lee House Takeaway
            </Typography>
        </Button>
    )
}