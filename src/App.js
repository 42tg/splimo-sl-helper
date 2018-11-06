import React, { Component } from "react"
import styled, { createGlobalStyle } from "styled-components/macro"
import logo from "./Splittermond-Logo_web.jpg"
import Gegner from "./Enemys/Enemy"
import { Normalize } from "styled-normalize"
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Merienda');

    * {
        font-family: 'Merienda', Verdana, Arial, Helvetica, sans-serif;
    }

    h3 {
        font-size: 1.5em;
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
    display: grid;
    grid: auto-flow / 800px;

    @media (min-width: 1000px) and (max-width: 2000px) {
        grid: auto-flow / 800px 800px;
    }
    @media (min-width: 2000px) {
        grid: auto-flow / 800px 800px 800px;
    }
    justify-items: stretch;
    align-items: stretch;
`
class App extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <Normalize />
                <GlobalStyle />
                <AppHeader>
                    <img src={logo} alt="logo" />
                    <h1> Die Spielleiterhilfe </h1>
                </AppHeader>
                <AppContent>
                    <Gegner name="Hans" lebenspunkte={16} />
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
