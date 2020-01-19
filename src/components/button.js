import styled from '@emotion/styled'

const Button = styled.button`
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 600;
    padding: ${props => props.size === 'large' ? '16px 32px' : '12px 24px'};
    border-radius: 8px;
    cursor: pointer;
    background: ${props => props.variant === 'secondary' ? 'none' : 'var(--accent)'};
    color: ${props => props.variant === 'secondary' ? 'var(--foreground0)' : 'var(--bg)'};
    box-shadow: ${props => props.variant === 'secondary' ? 'inset 0 0 0 1px var(--eventransparent1)' : 'none'};
    transition: 0.3s all ease-in-out;
    &:hover {
        background: ${props => props.variant === 'secondary' ? 'var(--eventransparent)' : 'var(--hoveraccent)'};
    }
    @media only screen and (max-width: 460px) {
        width: 100%;
        padding: 16px 28px;
        text-align: center;
    }
`

export default Button