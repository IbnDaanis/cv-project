import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'

const EducationForm = ({ setSchools }) => {
  const [hidden, setHidden] = useState(true)
  const [schoolName, setSchoolName] = useState('')
  const [qual, setQual] = useState('')
  const [dates, setDates] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    setSchools(schools => [
      ...schools,
      { schoolName, qual, dates, id: uuidv4() },
    ])
    setSchoolName('')
    setQual('')
    setDates('')
  }

  return (
    <div className='form-container'>
      <AiFillEdit
        className='edit'
        onClick={() => setHidden(hidden => !hidden)}
      />
      <form
        className='form'
        onSubmit={handleSubmit}
        autoComplete='off'
        style={{ display: hidden ? 'none' : 'block' }}
      >
        <label htmlFor='schoolName'>School Name</label>
        <input
          type='text'
          placeholder='School Name'
          id='schoolName'
          value={schoolName}
          onChange={e => setSchoolName(e.target.value)}
        />
        <label htmlFor='qual'>Qualification</label>
        <input
          type='text'
          placeholder='Qualification'
          id='qual'
          value={qual}
          onChange={e => setQual(e.target.value)}
        />
        <label htmlFor='dates'>Time of Study</label>
        <input
          type='text'
          placeholder='Time of Study'
          id='dates'
          value={dates}
          onChange={e => setDates(e.target.value)}
        />
        <button type='submit'>Add School</button>
      </form>
    </div>
  )
}

export default EducationForm
