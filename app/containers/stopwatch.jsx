import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { startTimer, stopTimer, clearTime } from '../actions/stopwatch'
import Button from '../components/button'
require('./stopwatch.css')


//APP

function formatTime (secondsElapsed) {
  const hours = String('0' + Math.floor(secondsElapsed/(60*60))).slice(-2);
  const minute = ('0' + (Math.floor(secondsElapsed / 60))).slice(-2)
  const seconds = ('0' + secondsElapsed % 60).slice(-2)
  return `${hours} : ${minute} : ${seconds}`
}

export class Stopwatch extends React.Component {
  constructor (props) {
    super(props)
    this.counter = null

    this._handleClickStart = this._handleClickStart.bind(this)
    this._handleClickStop = this._handleClickStop.bind(this)
    this._handleClickClear = this._handleClickClear.bind(this)
  }

  _handleClickStart () {
    if (this.props.recording === true) {
      return
  }
    this.counter = setInterval(this.props.onStartClick, 1000)
  }

  _handleClickStop () {
    clearInterval(this.counter)
    this.props.onStopClick()
  }

  _handleClickClear () {
    clearInterval(this.counter)
    this.props.onClearClick()
  }

render () {
    const {secondsElapsed, recording} = this.props

    return (
      <div className='stopwatch'>
        <h1 className='stopwatch__time'>{formatTime(secondsElapsed)}</h1>

        {(this.props.recording == false)
        ? <Button onClick={this._handleClickStart} text='Start' />
        : <Button onClick={this._handleClickStop} text='Stop' />
        }
        <Button onClick={this._handleClickClear} text='Reset' />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  const {recording, secondsElapsed} = state
    return {recording, secondsElapsed}
}


const mapDispatchToProps = (dispatch) => {
  return {
    onStartClick: () => {
      dispatch(startTimer())
    },
    onStopClick: () => {
      dispatch(stopTimer())
    },
    onClearClick: () => {
      dispatch(clearTime())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch)
