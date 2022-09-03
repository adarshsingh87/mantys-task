import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './datePicker.css'

const DatePicker = () => {
    const dispatch = useDispatch()
    const date = useSelector((state) => state.selectedDate)
    
    var today = new Date()
    var dd = today.getDate()
    var mm = today.getMonth() + 1 //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }

    var todayDate = yyyy + '-' + mm + '-' + dd
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
    var nextDD = nextweek.getDate()
    var nextMM = nextweek.getMonth() + 1 //January is 0 so need to add 1 to make it 1!
    var nextYYYY = nextweek.getFullYear()
    if (nextDD < 10) {
      nextDD = '0' + nextDD
    }
    if (nextMM < 10) {
      nextMM = '0' + nextMM
    }

    var nextweekDate = nextYYYY + '-' + nextMM + '-' + nextDD
  return (
    <div>
      <h3>Select Date</h3>
      <input
        type='date'
        min={todayDate}
        max={nextweekDate}
        value={date}
        onChange={(e) => dispatch({ type: 'update_date', value: e.target.value })}
        className='datepicker-input'
      />
    </div>
  )
}

export default DatePicker
