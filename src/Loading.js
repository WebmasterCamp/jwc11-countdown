import React from 'react'
import styled, {keyframes} from 'styled-components'
import logo from './logo.png'

const Zoom = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1.2);
  }
`

const Logo = styled.img`
  animation: ${Zoom} 1s alternate infinite;
  max-width: 400px;
  max-height: 400px;
`

const LoadingWrapper = styled.div`
  display: flex;
  background-color: rgb(16, 10, 16);
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export default function Loading() {
  return (
    <LoadingWrapper>
      <Logo src={logo} />
    </LoadingWrapper>
  )
}
