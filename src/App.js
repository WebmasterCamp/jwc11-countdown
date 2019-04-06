import React, {useEffect, useState, Suspense} from 'react'
import styled from 'styled-components'
import fiery from 'fiery'
import firebase from 'firebase'

import Clock from './Clock'
import Loading from './Loading'

const LoadingWrapper = styled.div`
  display: flex;
  background-color: rgb(16, 10, 16);
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    font-size: 5em;
  }
`

const Wrapper = () => {
  return (
    <Suspense
      fallback={
        <LoadingWrapper>
          <h1>Loading...</h1>
        </LoadingWrapper>
      }
    >
      <App />
    </Suspense>
  )
}

const App = () => {
  const endRef = firebase.database().ref('config/end')
  const endState = fiery.useFirebaseDatabase(endRef)

  const startRef = firebase.database().ref('config/start')
  const startState = fiery.useFirebaseDatabase(startRef)

  const [end, setEnd] = useState('')
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (endState.data) {
      setEnd(endState.data)
      console.log(new Date(endState.data))
    }
    if (startState.data !== undefined) {
      setStart(startState.data)
    }
  }, [endState.data, startState.data])

  return (
    <>
      {start ? <Clock end={end} /> : <Loading />}
      <div style={{display: 'none'}}>
        {endState.unstable_read()}
        {startState.unstable_read()}
      </div>
    </>
  )
}

export default Wrapper
