import React from "react";

const TextField = props => {
    return (
        <input
            autoFocus={true}
            value={props.value}
            disabled={true}
            style={{
                "height": props.height,
                "width": props.width,
                "border": "none",
                "padding": "0px",


                "textAlign": "center",
                "color": "black",
                "fontSize": `calc(${props.height} * 0.6)`,

                // This ensures that the input lines up with the buttons
                "verticalAlign": "middle"
            }}
        />
    )
};

export default TextField;