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
    const [currItem, setCurrItem ] = React.useState(null);
        const { items, itemToString } = props;

    return (
        <React.Fragment>
            {
                items.map(item => (
                    <Button key={item}
                            onClick={() => setCurrItem(item) }
                            variant={ item === currItem ? "contained" : "outlined" }
                            color="primary"
                            style={styles.button}>
                        { itemToString(item) }
                    </Button>)
                )
            }
        </React.Fragment>
    )
};

SelectableList.defaultProps = {
    itemToString: item => item
};

export default SelectableList;