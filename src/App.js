import React, { Component } from "react"
import styled, { createGlobalStyle } from "styled-components/macro"
import logo from "./Splittermond-Logo_web.jpg"
import Gegner from "./Enemys/Enemy"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Merienda');

    * {
        font-family: 'Merienda', Verdana, Arial, Helvetica, sans-serif;
    }
`

const AppHeader = styled.div`
    background-color: #ffffff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`
const AppContent = styled(AppHeader)`
    font-size: 1em;
`
class App extends Component {
    render() {
        return (
            <div className="App">
                <GlobalStyle />
                <AppHeader>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1> Die Spielleiterhilfe </h1>
                </AppHeader>
                <AppContent>
                    <Gegner name="Hans" lebenspunkte={9} />
                    <Gegner name="Peter" lebenspunkte={6} />
                </AppContent>
            </div>
        )
    }
}

const styledApp = styled(App)`
    color: #000000;
    text-align: center;
`
export default styledApp
