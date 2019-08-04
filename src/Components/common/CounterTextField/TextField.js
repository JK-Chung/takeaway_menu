import React from "react";

const TextField = props => (
    <input
        autoFocus={true}
        value={props.value}
        disabled={true}
        style={{
            "border": "none",
            "padding": "0rem",

            "textAlign": "center",
            "color": "black",
            // This ensures that the input lines up with the buttons
            "verticalAlign": "middle",

            ...props.style
        }}
    />
);

export default TextField;