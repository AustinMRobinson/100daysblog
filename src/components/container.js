import styled from "@emotion/styled"
import { css } from '@emotion/core'

const dynamicStyle = props =>
  css`
    max-width: ${props.width};
  `

const Container = styled.div`
    max-width: 960px;
    ${dynamicStyle};
    margin: 0 auto;
    padding: 0 1rem;
`

export default Container