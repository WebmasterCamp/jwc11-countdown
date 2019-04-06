import React from 'react'
import styled from 'styled-components'

const MessageBox = styled.div`
  display: inline;
  margin: 0 auto;
  padding: 30px;
  background: #fff;
  border: #e0bd4e 12px solid;
  border-radius: 30px;
  font-size: 5em;
`

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 25%;
  width: 100%;
  text-align: center;
`

const Message = ({message}) => {
  return (
    <MessageWrapper>
      <MessageBox>{message}</MessageBox>
    </MessageWrapper>
  )
}

export default Message
