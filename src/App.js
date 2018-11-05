import React, { Component } from "react"
import logo from "./Splittermond-Logo_web.jpg"
import "./App.css"
import Enemy from "./Enemys/Enemy"
import Lifepoint from "./Enemys/Lifepoint"

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1> Die Spielleiterhilfe </h1>

                    <div>
                        <Enemy name="Hans" lebenspunkte={9} />
                    </div>
                </header>
            </div>
        )
    }
}

export default App
