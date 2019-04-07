import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Transition} from 'react-transition-group'

const MessageAnimation = styled.div`
  position: absolute;
  bottom: 20%;
  transition: 1s;
  opacity: ${({state}) => (state === 'entered' ? 1 : 0)};
  transform: translateY(${({state}) => (state === 'entered' ? 0 : 400)}px);
  width: 100%;
`

const MessageBox = styled.div`
  display: inline;
  margin: 0 auto;
  padding: 25px 20px;
  background: #fff;
  border: #e0bd4e 12px solid;
  border-radius: 30px;
  font-size: 3em;
`

const MessageWrapper = styled.div`
  width: 100%;
  text-align: center;
`

const Message = ({message, announce}) => {
  const [announcement, setAnnouncement] = useState(false)

  useEffect(() => {
    setAnnouncement(announce)
  }, [announce])

  return (
    <Transition in={announcement} timeout={1000} mountOnEnter unmountOnExit>
      {state => (
        <MessageAnimation state={state}>
          <MessageWrapper>
            <MessageBox>{message}</MessageBox>
          </MessageWrapper>
        </MessageAnimation>
      )}
    </Transition>
  )
}

export default Message
