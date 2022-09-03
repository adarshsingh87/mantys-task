import React from 'react'
import './App.css'
import DatePicker from './components/datePicker/datePicker'
import TimeSelectorContainer from './components/timeSelector/timeSelector'

function App() {


  return (
    <div className='App'>
      <DatePicker />
      <TimeSelectorContainer />
    </div>
  )
}

export default App
