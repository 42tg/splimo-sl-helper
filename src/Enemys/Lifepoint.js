import React, { useState } from "react"
import styled from "styled-components"

export const Outer = styled.div`
    display: inline-block;
    margin: 1px;
    padding: 10px;
    width: 25px;
    height: 25px;
    background: black;
    border-radius: 5px;
`

export const Inner = styled.div`
    margin: -4px;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    border: 4px solid white;
    background: ${props => (props.active ? "black" : "white")};
`
export default props => {
    const [active, setActive] = useState(props.active)
    console.log(props.active)
    return (
        <Outer onClick={() => setActive(!active)}>
            <Inner active={props.active} />
        </Outer>
    )
}
