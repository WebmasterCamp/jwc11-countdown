import React, {Suspense} from 'react'
import styled from 'styled-components'
import fiery from 'fiery'
import firebase from 'firebase'

import Loading from './Loading'
import Clock from './Clock'
import Message from './components/Message'

const LoadingWrapper = styled.div`
  display: flex;
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
  const configRef = firebase.database().ref('config/')
  const configState = fiery.useFirebaseDatabase(configRef)

  const config = configState.unstable_read() || {
    start: false,
    end: 'Apr 7, 2019 9:00:00',
    message: '',
    announcement: false
  }

  return (
    <>
      {config.start ? (
        <>
          <Clock end={config.end} />
          <Message announce={config.announcement} message={config.message} />
        </>
      ) : (
        <Loading />
      )}

      <div style={{display: 'none'}}>{JSON.stringify(config)}</div>
    </>
  )
}

export default Wrapper
