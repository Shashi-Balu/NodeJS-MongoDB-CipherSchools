import React, { Component } from "react";
import Pizza from "./Pizza";

// const ClassAndFunctional = () => {
//   return (
//     <div>ClassAndFunctional</div>
//   )
// }

class ClassAndFunctional extends Component {
    render() {
        let name = "React";
        let brand = "Pizzahut";
        let desc = "Best pizza";

        let brand2 = "Domino";
        let desc2 = "Other best pizza";

        return (
            <div>
                <h1>{name}</h1>
                <Pizza brand={brand} desc={desc} />
                <Pizza brand={brand2} desc={desc2} />
            </div>
        );
    }
}

export default ClassAndFunctional;
