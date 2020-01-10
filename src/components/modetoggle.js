import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React, { useState } from "react"
import styled from "@emotion/styled"
import Icon from "../components/icon"

const ToggleIcon = styled(Icon)`
    fill: var(--foreground2);
    transition: all 0.1s ease-in-out;
    width: 1.25rem;
    height: 1.25rem;
    margin: 1px 0 0 1px;
`

const Toggle = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  transition: all 0.3s;
  border-radius: 1.25rem;
  padding: 0.625rem;
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  z-index: 10;
  &:hover {
    background: var(--eventransparent);
    ${ToggleIcon} {
      fill: var(--foreground0);
    }
  }
`

const ToggleWrapper = styled.div`
`

const ModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <Toggle>
      <ThemeToggler>
        {({ toggleTheme }) => (
          <ToggleWrapper
            onClick={() => {
              toggleTheme(darkMode ? "dark" : "light")
              setDarkMode(!darkMode)
            }}>
            <ToggleIcon name="mode"/>
          </ToggleWrapper>
        )}
      </ThemeToggler>
    </Toggle>
  )
}

export default ModeToggle