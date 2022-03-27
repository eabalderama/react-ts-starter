import styled from 'styled-components'
import Button from './Button'
import { ButtonProps } from './types'

const LeftIconButton = styled(Button)<ButtonProps>`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border: 0;
  height: 50px;
  width: 45px;
  border-radius: 0;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  color: ${(props) => (!props.disabled ? props.theme.colors.primary : `${props.theme.colors.primary}55`)};
  pointer-events: ${(props) => (!props.disabled ? undefined : 'none')};
  cursor: pointer;
  display: flex;
  font-weight: 700;
  justify-content: center;
  outline: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
  margin-right: 2.5px;
  font-family: Oswald;
  font-size: 24px;
  padding: 0 0 5px;
`

export default LeftIconButton
