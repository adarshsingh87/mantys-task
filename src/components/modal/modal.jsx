import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './modal.css'

const Modal = (props) => {
  const dispatch = useDispatch()
  const date = useSelector((state) => state.selectedDate)
  const meetings = useSelector((state) => state.meetings)
  const time = useSelector((state) => state.selectedTime)

  const reverseString = (str) => {
    if (str === '') return ''
    else {
      str = str.split('-').reverse()
      return str.join('-')
    }
  }

  const [name, setName] = useState(
    meetings[date] ? (meetings[date][time] ? meetings[date][time].name : '') : ''
  )
  const [phNumber, setNumber] = useState(
    meetings[date] ? (meetings[date][time] ? meetings[date][time].number : '') : ''
  )

  const handleSubmit = () => {
    if (phNumber.toString().length !== 10) {
      window.alert('Please enter valid phone number')
      return
    }
    if (name === '') {
      window.alert('Please enter the name')
      return
    }
    var updatedMeeting = meetings
    if (updatedMeeting[date]) {
      updatedMeeting[date][time] = {
        name: name,
        number: phNumber,
      }
    } else {
      updatedMeeting[date] = {}
      updatedMeeting[date][time] = {
        name: name,
        number: phNumber,
      }
    }
    console.log(updatedMeeting)
    dispatch({ type: 'update_meeting', value: updatedMeeting })
    props.setIsOpen(false)
  }

  return (
    <React.Fragment>
      <div className='darkBG' onClick={() => props.setIsOpen(false)} />
      <div className='centered'>
        <div className='modal'>
          <div className='modalHeader'>
            <h2>
              Enter name and Number to book meeting on {reverseString(date)} at {time}
            </h2>
          </div>
          <div className='modalBody'>
            <div className='inputContainer'>
              <div className="inputLabel">Name:</div>
              <input
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='modalInputs'
                placeholder='John Doe'
              />
            </div>
            <div className='inputContainer'>
              <div className="inputLabel">Phone Number:</div>
              <input
                type='number'
                name='number'
                value={phNumber}
                onChange={(e) => setNumber(e.target.value)}
                className='modalInputs'
                placeholder='9898989898'
                min={0}
                
              />
            </div>
            <button onClick={handleSubmit} className='saveBtn'>Save</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Modal
