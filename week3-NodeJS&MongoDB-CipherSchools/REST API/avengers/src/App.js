import logo from "./logo.svg";
import axios from "axios";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
    state = {
        avengers: [],
    };
    handleClick = () => {
        axios
            .get("http://localhost:3000/api/avengers")
            .then((avengers) => {
                console.log(avengers);
                this.setState({
                    avengers: avengers.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    render() {
        return (
            <div className="App">
                <h1>Avengers list</h1>
                <button onClick={this.handleClick}>Get data</button>
            </div>
        );
    }
}

export default App;
