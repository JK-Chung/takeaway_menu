import React from "react";
import SelectableList from "../common/SelectableList";
import sides from "../../Resources/sides";

const SidesSetter = props => {
    const [ selectedSide, setSelectedSide ] = React.useState(null);
    return (
        <React.Fragment>
            <SelectableList items={sides.map(({name}) => name)}
                            onSelect={selected => {
                                setSelectedSide(selected);
                                console.log("SELECTED FROM SIDE SETERTRS", selected);
                            }}
            />
        </React.Fragment>
    )
};

export default SidesSetter;