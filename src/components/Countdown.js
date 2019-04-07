import React, {Component} from 'react'

class Countdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      isStart: false,
      diff: 0
    }
  }

  startTimer() {
    // update every second
    if (!this.state.isStart) {
      const date = this.calculateCountdown(this.props.date)
      date ? this.setState(date) : this.stopTimer()
      this.setState({isStart: true})
      this.interval = setInterval(() => {
        const date = this.calculateCountdown(this.props.date)
        date ? this.setState(date) : this.stopTimer()
      }, 1)
    }
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000
    // clear countdown when date is reached
    if (diff < 0) return false

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0
    }

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = diff
    this.props.setCountDown(timeLeft)
    this.setState({diff: this.state.diff})
    return timeLeft
  }

  stopTimer() {
    if (this.state.isStart) {
      clearInterval(this.interval)
      this.setState({isStart: false})
    }
  }

  addLeadingZeros(value) {
    value = String(value)
    while (value.length < 2) {
      value = '0' + value
    }
    return value
  }

  componentDidMount() {
    let date = this.calculateCountdown(this.props.date)
    date && this.setState(date)
    date && this.props.setCountDown(date)
    this.startTimer()
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  render() {
    const countDown = this.state
    return (
      <div className="Countdown" style={{position: 'absolute'}}>
        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.hours)}</strong>:
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.min)}</strong>:
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.sec)}</strong>
          </span>
        </span>
      </div>
    )
  }
}

export default Countdown
