import React from "react";
import Button from "@material-ui/core/Button";

const styles = {
    button: {
        "display": "block",
        "marginTop": "1em",
        "width": "100%",
    }
};

const SelectableList = props => {
    const [currItem, setCurrItem] = React.useState(null);
    React.useEffect(() => props.onSelect(currItem), [currItem]);

    return (
        <React.Fragment>
            {
                props.items.map(item => (
                    <Button key={item}
                            onClick={ () => setCurrItem(item) }
                            variant={item === currItem ? "contained" : "outlined"}
                            color="primary"
                            style={styles.button}>
                        { props.itemToString(item) }
                    </Button>)
                )
            }
        </React.Fragment>
    )
};

SelectableList.defaultProps = {
    itemToString: item => item,
    onSelect: selectedItem => {
    }
};

export default SelectableList;