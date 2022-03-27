import styled from 'styled-components'
import Button from './Button'
import { ButtonProps } from './types'

const RightIconButton = styled(Button)<ButtonProps>`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border: 0;
  height: 50px;
  width: 45px;
  border-radius: 0;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  color: ${(props) => (!props.disabled ? props.theme.colors.primary : `${props.theme.colors.primary}55`)};
  cursor: pointer;
  display: flex;
  font-weight: 700;
  justify-content: center;
  outline: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
  margin: 0;
  padding: 0;
`

export default RightIconButton
