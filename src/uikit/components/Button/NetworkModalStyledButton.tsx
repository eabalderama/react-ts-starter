import styled, { DefaultTheme } from 'styled-components'
import { space } from 'styled-system'
import { ButtonProps } from './types'

type ThemedProps = {
  theme: DefaultTheme
} & ButtonProps

const getDisabledStyles = ({ isLoading }: ThemedProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `
  }

  return `
    &:disabled,
    &.button--disabled {
      box-shadow: none;
      cursor: not-allowed;
      opacity: 0.5;
    }
  `
}

const removePointerEvents = ({ disabled, as }: ThemedProps) => {
  if (disabled && as && as !== 'button') {
    return `
      pointer-events: none;
    `
  }

  return ''
}

const NetworkModalStyledButton = styled.button<ButtonProps>`
  align-items: center;
  background-color: #1969ff;
  border: ${({ theme}) => theme.colors.primary};
  border-radius: 16px;
  box-shadow: ${({ theme}) => theme.card.boxShadow};
  color: ${({ theme}) => theme.colors.primary};
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  /* max-content instead of auto for Safari fix */
  widith: 118px;
  height: ${({ size }) => (size === 'sm' ? '35px' : '35px')};
  line-height: 1;
  letter-spacing: 0.03em;
  justify-content: center;
  outline: 0;
  padding: ${({ size }) => (size === 'sm' ? '0 16px' : '0 24px')};
  transition: background-color 0.2s;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};

  &:focus:not(:active) {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondary};
  }

  ${getDisabledStyles}
  ${removePointerEvents}
  ${space}
`

  // &:hover:not(:disabled):not(.button--disabled):not(:active) {
  //   background-color: ${getButtonVariantProp('backgroundHover')};
  //   border-color: ${getButtonVariantProp('borderColorHover')};
  // }
  // &:active {
  //   background-color: ${getButtonVariantProp('backgroundActive')};
  //   box-shadow: ${getButtonVariantProp('boxShadowActive')};
  // }


NetworkModalStyledButton.defaultProps = {
  type: 'button',
}

export default NetworkModalStyledButton
