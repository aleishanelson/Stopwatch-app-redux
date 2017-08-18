/*

REDUCER ACTIONS

*/
function formatTime (secondsElapsed) {
  const hours = String('0' + Math.floor(secondsElapsed/(60*60))).slice(-2);
  const minute = ('0' + (Math.floor(secondsElapsed / 60))).slice(-2)
  const seconds = ('0' + secondsElapsed % 60).slice(-2)
  return `${hours} : ${minute} : ${seconds}`
}

const START_TIMER = 'START_TIMER'
function startTimer () {
  return {
    type: START_TIMER
  }
}

const STOP_TIMER = 'STOP_TIMER'
function stopTimer () {
  return {
    type: STOP_TIMER
  }
}

const CLEAR_TIME = 'CLEAR_TIME'
function clearTime () {
  return {
    type: CLEAR_TIME
  }
}



/*

REDUCER

*/

const initialState = {
  recording: false,
  secondsElapsed: 0
}

function startTimer (state) {
  if (typeof state.secondsElapsed !== 'number') {
    return }
  const addedSecond = state.secondsElapsed + 1
  return Object.assign({}, state, {recording: true, secondsElapsed: addedSecond})
};

function stopTimer (state) {
  return Object.assign({}, state, {recording: false})
}


function clearTime (state) {
  return Object.assign({}, state, {recording: false, secondsElapsed: 0})
}

export default function stopwatch (state = initialState, action = {}) {
  switch (action.type) {

    case START_TIMER:
      return startTimer(state)

    case STOP_TIMER:
      return stopTimer(state)

    case CLEAR_TIME:
      return clearTime(state)

    default:
      return state
  }
};
