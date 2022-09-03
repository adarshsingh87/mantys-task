import { createStore } from 'redux'

const initialState = {
  meetings: {},
  selectedDate: '',
  selectedTime: '',
}

const reducer = (state = initialState, action) => {
  // Reducer function
  switch (action.type) {
    case 'update_date':
      return { ...state, selectedDate: action.value }
    case 'update_time':
      return { ...state, selectedTime: action.value }
    case 'update_meeting':
      return { ...state, meetings: action.value }
    default:
      return state
  }
}

const store = createStore(reducer) // redux-store

export default store
