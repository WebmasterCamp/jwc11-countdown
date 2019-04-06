import React, {useEffect, useState, Suspense} from 'react'
import fiery from 'fiery'
import firebase from 'firebase'
import Clock from './Clock'

const Wrapper = () => {
  return (
    <Suspense fallback={<div>loadding</div>}>
      <App />
    </Suspense>
  )
}

const App = () => {
  const endRef = firebase.database().ref('config/end')
  const endState = fiery.useFirebaseDatabase(endRef)

  const [end, setEnd] = useState('')

  useEffect(() => {
    if (endState.data) {
      setEnd(endState.data)
      console.log(new Date(endState.data))
    }
  }, [endState.data])

  return (
    <>
      <Clock end={end} />
      {endState.unstable_read()}
    </>
  )
}

export default Wrapper
