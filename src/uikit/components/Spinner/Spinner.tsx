import React from 'react'
import styled, { keyframes } from 'styled-components'
import HyperIcon from './HyperIcon'
import { SpinnerProps } from './types'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  position: relative;
`

interface RotatingHyperIconProps {
  placement: number
}

const RotatingHyperIcon = styled(HyperIcon)<RotatingHyperIconProps>`
  position: absolute;
  top: ${({ placement }) => `-${placement}px`};
  left: ${({ placement }) => `-${placement}px`};
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingHyperIcon width={`${size}px`} placement={size/2}/>
    </Container>
  )
}

export default Spinner
