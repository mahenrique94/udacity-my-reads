import PropTypes from "prop-types"
import styled from "styled-components"

import { Link } from "react-router-dom"

const getColor = inverted => inverted ? "color: #333333;" : "color: #FDFDFD;"

const StyledLink = styled(Link)`
    ${({ inverted }) => getColor(inverted)}
    font-size: 1.2rem;
    font-weight: bold;
    transition: transform .25s ease-in-out;
    &:hover {
        ${({ inverted }) => getColor(inverted)}
        transform: scale(1.125);
    }
`

StyledLink.propTypes = {
    to: PropTypes.string.isRequired
}

export default StyledLink
