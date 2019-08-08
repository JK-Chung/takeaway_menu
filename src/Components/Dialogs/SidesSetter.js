import React from "react";
import SelectableList from "../common/SelectableList";
import sides from "../../Resources/sides";

const SidesSetter = props => {

    return (
        <React.Fragment>
            <SelectableList items={sides.map(({name}) => name)}/>
        </React.Fragment>
    )
};

export default SidesSetter;