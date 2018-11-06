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

const GegnerForm = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const StyledInput = styled.input`
    border-radius: 8px;
    padding: 8px;
    margin: 8px;
    display: block;
    text-align: center;
`
const StyledButton = styled.button`
    border: 1px solid #99ee99;
    background-color: #009900;
    color: #ffffff;
    padding: 8px;
    border-radius: 8px;
    margin: 8px;
    display: block;
`

class App extends Component {
    state = { gegner: [], name: "", lebenspunkte: "" }
    gegnerHinzufügen = e => {
        e.preventDefault()
        const { name, lebenspunkte, gegner } = this.state
        if (!name || !lebenspunkte) return
        this.setState({
            gegner: [
                ...gegner,
                {
                    name,
                    lebenspunkte,
                    lebensleisten: 5
                }
            ],
            name: ""
        })
    }

    handleInput = e => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div className={this.props.className}>
                <Normalize />
                <GlobalStyle />
                <AppHeader>
                    <img src={logo} alt="logo" />
                    <h1> Die Spielleiterhilfe </h1>
                    <GegnerForm onSubmit={e => this.gegnerHinzufügen(e)}>
                        <StyledInput
                            placeholder="Name"
                            name="name"
                            value={this.state.name}
                            onChange={e => this.handleInput(e)}
                        />
                        <StyledInput
                            placeholder="LP"
                            name="lebenspunkte"
                            value={this.state.lebenspunkte}
                            onChange={e => this.handleInput(e)}
                            type="number"
                        />
                        <StyledButton>Hinzufügen</StyledButton>
                    </GegnerForm>
                </AppHeader>
                <AppContent>
                    {this.state.gegner.map((gegner, id) => (
                        <Gegner key={id} {...gegner} />
                    ))}
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
