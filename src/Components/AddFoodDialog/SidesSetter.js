import React from "react";
import SelectableList from "../common/SelectableList";
import PropTypes from "prop-types";
import DialogContentTitle from "./DialogContentTitle";
import sides from "../../Resources/sides";

const SidesSetter = ({initialSide, onSelect}) => {
    const [ selectedSide, setSelectedSide ] = React.useState(initialSide);
    React.useEffect(() => onSelect(selectedSide), [onSelect, selectedSide]);

    return (
        <React.Fragment>
            <DialogContentTitle>What side would you like with your meal?</DialogContentTitle>
            <SelectableList items={sides.map(({name}) => name)} initialItem={initialSide} onSelect={ setSelectedSide } />
        </React.Fragment>
    )
};

SidesSetter.propTypes = {
    initialSide: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

SidesSetter.defaultProps = {
    initialSide: "",
    onSelect: () => {}
};

export default SidesSetter;