import FloatingLabelInput from 'react-floating-label-input';
import styled from '@emotion/styled'

const Input = styled(FloatingLabelInput)`
    border: none;
    label {
        padding: 16px;
    }
    input {
        line-height: 24px;
        &:focus {
            box-shadow: inset 0 0 0 2px var(--accent);
        }
    }
`

export default Input