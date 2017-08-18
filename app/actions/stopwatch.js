export const START_TIMER = 'START_TIMER'

export function startTimer () {
  return {
    type: START_TIMER
  }
}

export const STOP_TIMER = 'STOP_TIMER'

export function stopTimer () {
  return {
    type: STOP_TIMER
  }
}

export const SAVE_TIME = 'SAVE_TIME'

export function saveTime () {
  return {
    type: SAVE_TIME
  }
}

export const CLEAR_TIME = 'CLEAR_TIME'

export function clearTime () {
  return {
    type: CLEAR_TIME
  }
}
