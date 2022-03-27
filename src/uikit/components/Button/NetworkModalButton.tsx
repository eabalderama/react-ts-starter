import React from 'react'
import getExternalLinkProps from '../../util/getExternalLinkProps'
import NetworkModalStyledButton from './NetworkModalStyledButton'
import { variants } from './types'

const NetworkModalButton: React.FC<any> = ({
  children,
  external,
  isLoading,
  disabled,
  ...props
}) => {
  const internalProps = external ? getExternalLinkProps() : {}
  const isDisabled = isLoading || disabled

  return (
    <NetworkModalStyledButton {...internalProps} {...props} isLoading={isLoading} disabled={isDisabled}>
      {children}
    </NetworkModalStyledButton>
  )
}

NetworkModalButton.defaultProps = {
  variant: variants.PRIMARY,
  external: false,
  isLoading: false,
  disabled: false,
}

export default NetworkModalButton
