import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { Flex } from 'uikit'
import { SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_REDUCED } from 'uikit/components/Menu/config'

const StyledNav = styled.nav<{ showMenu: boolean }>`
position: fixed;
z-index: 20;

top: ${({ showMenu }) => (showMenu ? 0 : `64px`)};
left: 0;
transition: top 0.2s;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 8px;
padding-right: 16px;
width: 100%;
height: 56px;
background-color: transparent;
border: none;
transform: translate3d(0, 0, 0);

@media (max-width: 545px) {
  padding: 0 4px;
}
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
`

const BodyWrapper = styled.div`
  top: 64px;
  position: relative;
  height: calc(100% - 64px);
  width: 100%;
  display: flex;
`

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
  padding-bottom: 0;
  overflow-y: scroll;

  ${({ theme }) => theme.mediaQueries.sm} {
    ::-webkit-scrollbar {
      width: 9px;
      background: !transparent;
    }
  }

  ${({ theme }) => theme.mediaQueries.nav} {
    //margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    //max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`

const Nav = () => {
  return (
    <Wrapper>
      <StyledNav showMenu={true}>
        <Flex>
        </Flex>
      </StyledNav>

      <BodyWrapper>
        <Inner isPushed={true} showMenu={true}>
            <Outlet />
        </Inner>
      </BodyWrapper>
    </Wrapper>
  )
}

export default Nav