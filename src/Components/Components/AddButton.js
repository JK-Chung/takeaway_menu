import React from "react";
import AddIcon from "@material-ui/icons/Add";

import BaseButton from "./BaseButton";

const AddButton = props => {
    return (
        <BaseButton {...props}>
            <AddIcon />
        </BaseButton>
    )
};

export default AddButton;