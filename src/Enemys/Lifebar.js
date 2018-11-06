import React from "react"
import styled from "styled-components/macro"

const StyledLifebar = styled.div`
    margin: -8px;
`
const Lifebar = ({ children = undefined }) => {
    return <StyledLifebar>{children}</StyledLifebar>
}

export default Lifebar
