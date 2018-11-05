import React, { useState } from "react"
import Lifebar from "./Lifebar"
import Lifepoint from "./Lifepoint"

import { pipe, map, splitEvery, addIndex } from "ramda"

const indexMap = addIndex(map)
const Enemy = ({ name, lebenspunkte = 6, lebensleisten = 5 }) => {
    const [Lebenspunkte, setLebenspunkte] = useState(
        new Array(lebenspunkte * lebensleisten).fill(false)
    )
    let uniqueId = 0

    const addDamage = ([_, ...tail]) => [...tail, true]

    const renderLifepoints = (active, index) => {
        return <Lifepoint key={index} active={active} />
    }

    const seperated = pipe(
        indexMap(renderLifepoints),
        splitEvery(lebenspunkte),
        indexMap((childs, index) => <Lifebar key={index}>{childs}</Lifebar>)
    )

    return (
        <React.Fragment>
            <h3>{name}</h3>
            <div>{seperated(Lebenspunkte)}</div>
            <button
                onClick={() => {
                    const newLebenspunkte = addDamage(Lebenspunkte)
                    console.log(newLebenspunkte)
                    setLebenspunkte(newLebenspunkte)
                }}
            >
                1 Damage
            </button>
        </React.Fragment>
    )
}

export default Enemy
