import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const styles = {
    button: {
        "display": "block",
        "marginTop": "1em",
        "width": "100%",
    }
};

const SelectableList = ({ items, itemToString, initialItem, onSelect }) => {
    const [currItem, setCurrItem] = React.useState(initialItem);
    React.useEffect(() => onSelect(currItem), [onSelect, currItem]);

    return (
        <React.Fragment>
            {
                items.map(item => (
                    <Button key={item}
                            onClick={ () => setCurrItem(item) }
                            variant={item === currItem ? "contained" : "outlined"}
                            color="primary"
                            style={styles.button}>
                        { itemToString(item) }
                    </Button>)
                )
            }
        </React.Fragment>
    )
};

SelectableList.propTypes = {
    items: PropTypes.array.isRequired,
    itemToString: PropTypes.func.isRequired,
    initialItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onSelect: PropTypes.func.isRequired
};

SelectableList.defaultProps = {
    itemToString: item => item,
    onSelect: selectedItem => {}
};

export default SelectableList;