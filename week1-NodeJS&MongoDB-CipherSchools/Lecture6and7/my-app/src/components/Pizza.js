import React from "react";

const Pizza = (props) => {
    console.log("Pizza ", props);
    return (
        <div>
            <h1>{props.brand.toUpperCase()}</h1>
            <p>{props.desc}</p>
        </div>
    );
};

export default Pizza;
