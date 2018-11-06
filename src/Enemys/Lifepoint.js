import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"

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
    useEffect(
        () => {
            setActive(props.active)
        },
        [props.active]
    )
    return (
        <Outer onClick={() => setActive(!active)}>
            <Inner active={active} />
        </Outer>
    )
}
