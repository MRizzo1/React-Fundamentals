import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle `
  button {
    background: ${({ theme }) => theme.backgroundButton};
    color: ${({ theme }) => theme.buttonTextColor}
  }

  .submitButton {
    background: ${({ theme }) => theme.backgroundButton};
    color: ${({ theme }) => theme.buttonTextColor}
  }

  .left {
    background: ${({ theme }) => theme.leftBackground};
    color: ${({ theme }) => theme.leftTextColor}
  }

  .right {
    background: ${({ theme }) => theme.rightBackground};
    color: ${({ theme }) => theme.rightTextColor}
  }
`