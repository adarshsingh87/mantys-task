import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../modal/modal'

import './timeSelector.css'

const TimeSelectorContainer = () => {
  const date = useSelector((state) => state.selectedDate)

  const availableTime = [
    '9:00 Am',
    '10:00 Am',
    '11:00 Am',
    '12:00 Pm',
    '1:00 Pm',
    '2:00 Pm',
    '3:00 Pm',
    '4:00 Pm',
    '5:00 Pm',
    '6:00 Pm',
    '7:00 Pm',
    '8:00 Pm',
  ]

  return date === '' ? (
    <div />
  ) : (
    <div className='timeSelectorContainer'>
      {availableTime.map((e, i) => (
        <TimeSelectorCell propTime={e} key={i} />
      ))}
    </div>
  )
}

export const TimeSelectorCell = ({ propTime }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const date = useSelector((state) => state.selectedDate)
  const meetings = useSelector((state) => state.meetings)

  const handleMeetingClick = () => {
    dispatch({ type: 'update_time', value: propTime })
    setIsOpen(true)
  }

  return (
    <React.Fragment>
      <div
        onClick={handleMeetingClick}
        className={`timeSelectorCell ${
          meetings[date] ? (meetings[date][propTime] ? 'activeTimeCell' : null) : null
        }`}
      >
        {/* check if meetings on that exist? if yes only then check for times */}
        {propTime}
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </React.Fragment>
  )
}

export default TimeSelectorContainer
