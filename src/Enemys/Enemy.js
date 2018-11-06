import React, { useReducer } from "react"
import styled from "styled-components/macro"
import Lifebar from "./Lifebar"
import Lifepoint from "./Lifepoint"

import { pipe, map, splitEvery, addIndex, splitAt, concat } from "ramda"

const indexMap = addIndex(map)

const initialState = {
    name: "",
    schaden: 0,
    lebenspunkte: 6,
    lebensleisten: 5,
    Lebenspunkte: []
}

function reducer(state, action) {
    switch (action.type) {
        case "HEAL": {
            const schaden = Math.max(0, state.schaden - action.heal)
            const Lebenspunkte = splitAt(schaden, state.Lebenspunkte)
            Lebenspunkte[0].fill(true)
            Lebenspunkte[1].fill(false)
            return {
                ...state,
                schaden: schaden,
                Lebenspunkte: concat(...Lebenspunkte)
            }
        }
        case "DAMAGE": {
            const schaden = Math.min(
                state.schaden + action.schaden,
                state.lebenspunkte * state.lebensleisten
            )
            const Lebenspunkte = splitAt(schaden, state.Lebenspunkte)
            Lebenspunkte[0].fill(true)
            Lebenspunkte[1].fill(false)
            return {
                ...state,
                schaden: schaden,
                Lebenspunkte: concat(...Lebenspunkte)
            }
        }
        case "RESET":
            return {
                ...state,
                name: action.name,
                lebenspunkte: action.lebenspunkte,
                lebensleisten: action.lebensleisten,
                Lebenspunkte: new Array(
                    action.lebensleisten * action.lebenspunkte
                ).fill(false)
            }
        default:
            return state
    }
}

const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    margin: 8px;
    border: 1px solid #777777;
    border-radius: 3px;
    padding: 8px 10px;
    min-width: 80px;
    box-shadow: 2px 2px #000000;
    :active {
        box-shadow: 1px 1px #000000;
    }
`
const HealButton = styled(Button)`
    background: #009900;
    color: #ffffff;
    border: 1px solid #99ee99;
`
const DamageButton = styled(Button)`
    background: #990000;
    color: #ffffff;
    border: 1px solid #ee9999;
`
const StyledGegner = styled.div`
    margin: 10px;
    padding: 5px;
`
function Gegner({ name, lebenspunkte = 6, lebensleisten = 5 }) {
    const [state, dispatch] = useReducer(reducer, initialState, {
        type: "RESET",
        name,
        lebensleisten,
        lebenspunkte
    })

    const renderLifepoints = (active, index) => {
        return <Lifepoint key={index} active={active} />
    }

    const seperated = pipe(
        indexMap(renderLifepoints),
        splitEvery(state.lebenspunkte),
        indexMap((childs, index) => <Lifebar key={index}>{childs}</Lifebar>)
    )

    return (
        <StyledGegner>
            <h3>{state.name}</h3>
            <div>{seperated(state.Lebenspunkte)}</div>
            <ButtonArea>
                <HealButton onClick={() => dispatch({ type: "HEAL", heal: 5 })}>
                    5 Heal
                </HealButton>
                <HealButton onClick={() => dispatch({ type: "HEAL", heal: 1 })}>
                    1 Heal
                </HealButton>
                <DamageButton
                    onClick={() => dispatch({ type: "DAMAGE", schaden: 1 })}
                >
                    1 Damage
                </DamageButton>
                <DamageButton
                    onClick={() => dispatch({ type: "DAMAGE", schaden: 5 })}
                >
                    5 Damage
                </DamageButton>
            </ButtonArea>
        </StyledGegner>
    )
}

export default Gegner
