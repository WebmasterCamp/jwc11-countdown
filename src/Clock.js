/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import Countdown from './components/Countdown'
import Fire from './assets/fire.gif'
import './Clock.css'

const Clock = ({end}) => {
  const [endtime, setEnd] = useState(new Date())
  const [years, setYears] = useState(0)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [millsec, setMillsec] = useState(0)

  useEffect(() => {
    if (end) {
      setEnd(end)
    }
  }, [end])

  function setCountDown(data) {
    setYears(data.years)
    setDays(data.days)
    setHours(data.hours)
    setMin(data.min)
    setSec(data.sec)
    setMillsec(data.millsec)
  }

  return (
    <div className="App col">
      <div style={{width: '100vh', minHeight: '180px'}} className="row">
        <div className="col">
          <img
            style={{
              position: 'relative',
              top:
                hours >= 0
                  ? hours === 0
                    ? `calc(30% + ${(3600 - min * 60 - sec) / 60}%)`
                    : '30%'
                  : '0',
              width:
                hours >= 0 && (min !== 0 || sec !== 0)
                  ? hours === 0
                    ? `calc(30% - ${(3600 - min * 60 - sec) / 150}%)`
                    : '30%'
                  : '0'
            }}
            src={Fire}
            alt="fire"
          />
        </div>
      </div>
      <div style={{minWidth: '1280px', minHeight: '155.25px'}} className="row">
        <div className="col">
          <img
            style={{
              position: 'relative',
              left:
                hours >= 7
                  ? hours === 7
                    ? `calc(20% + ${(3600 - min * 60 - sec) / 1920}%)`
                    : '20%'
                  : '0',
              width:
                hours >= 7
                  ? hours === 7
                    ? `calc(30% - ${(3600 - min * 60 - sec) / 150}%)`
                    : '30%'
                  : '0',
              top:
                hours >= 7
                  ? hours === 7
                    ? `${(3600 - min * 60 - sec) * 0.02}%`
                    : '0'
                  : '0'
            }}
            src={Fire}
            alt="fire"
          />
        </div>
        <div className="col">
          <img
            style={{
              position: 'relative',
              right:
                hours >= 1
                  ? hours === 1
                    ? `calc(20% + ${(3600 - min * 60 - sec) / 960}%)`
                    : '20%'
                  : '0',
              width:
                hours >= 1
                  ? hours === 1
                    ? `calc(30% - ${(3600 - min * 60 - sec) / 150}%)`
                    : '30%'
                  : '0',
              top:
                hours >= 1
                  ? hours === 1
                    ? `${(3600 - min * 60 - sec) * 0.02}%`
                    : '0'
                  : '0'
            }}
            src={Fire}
            alt="fire"
          />
        </div>
      </div>
      <div style={{minWidth: '1250px', minHeight: '155.25px'}} className="row">
        <div className="col">
          <img
            style={{
              position: 'relative',
              left:
                hours >= 6
                  ? hours === 6
                    ? `calc(5% + ${(3600 - min * 60 - sec) / 3840}%)`
                    : '5%'
                  : '0',
              width:
                hours >= 6
                  ? hours === 6
                    ? `calc(30% - ${(3600 - min * 60 - sec) / 150}%)`
                    : '30%'
                  : '0',
              top:
                hours >= 6
                  ? hours === 6
                    ? `${(3600 - min * 60 - sec) * 0.02}%`
                    : '0'
                  : '0'
            }}
            src={Fire}
            alt="fire"
          />
        </div>
        <div className="col">
          <img
            style={{
              position: 'relative',
              right:
                hours >= 2
                  ? hours === 2
                    ? `calc(5% + ${(3600 - min * 60 - sec) / 1920}%)`
                    : '5%'
                  : '0',
              width:
                hours >= 2
                  ? hours === 2
                    ? `calc(30% - ${(3600 - min * 60 - sec) / 150}%)`
                    : '30%'
                  : '0',
              top:
                hours >= 2
                  ? hours === 2
                    ? `${(3600 - min * 60 - sec) * 0.02}%`
                    : '0'
                  : '0'
            }}
            src={Fire}
            alt="fire"
          />
        </div>
      </div>
      <div style={{minWidth: '1250px', minHeight: '155.25px'}} className="row">
        <div className="col">
          <img
            style={{
              position: 'relative',
              left:
                hours >= 5
                  ? hours === 5
                    ? `calc(20% + ${(3600 - min * 60 - sec) / 960}%)`
                    : '20%'
                  : '0',
              width:
                hours >= 5
                  ? hours === 5
                    ? `calc(30% - ${(3600 - min * 60 - sec) / 150}%)`
                    : '30%'
                  : '0',
              top:
                hours >= 5
                  ? hours === 5
                    ? `${(3600 - min * 60 - sec) * 0.02}%`
                    : '0'
                  : '0'
            }}
            src={Fire}
            alt="fire"
          />
        </div>
        <div className="col">
          <img
            style={{
              position: 'relative',
              right:
                hours >= 3
                  ? hours === 3
                    ? `calc(20% + ${(3600 - min * 60 - sec) / 1920}%)`
                    : '20%'
                  : '0',
              width:
                hours >= 3
                  ? hours === 3
                    ? `calc(30% - ${(3600 - min * 60 - sec) / 150}%)`
                    : '30%'
                  : '0',
              top:
                hours >= 3
                  ? hours === 3
                    ? `${(3600 - min * 60 - sec) * 0.02}%`
                    : '0'
                  : '0'
            }}
            src={Fire}
            alt="fire"
          />
        </div>
      </div>
      <div style={{maxWidth: '1250px', minHeight: '180px'}} className="row">
        <div className="col">
          <img
            style={{
              position: 'relative',
              top:
                hours >= 4
                  ? hours === 4
                    ? `calc(-30% + ${(3600 - min * 60 - sec) * 0.02}%)`
                    : '-30%'
                  : '0',
              width:
                hours >= 4
                  ? hours === 4
                    ? `calc(30% - ${(3600 - min * 60 - sec) / 150}%)`
                    : '30%'
                  : '0'
            }}
            src={Fire}
            alt="fire"
          />
        </div>
      </div>
      <Countdown date={endtime} setCountDown={data => setCountDown(data)} />
    </div>
  )
}

export default Clock
