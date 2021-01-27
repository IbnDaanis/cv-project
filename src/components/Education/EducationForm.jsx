import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'

const EducationForm = ({ setSchools, school, index, setCurrMenu, open }) => {
  const [hidden, setHidden] = useState(true)
  const [schoolName, setSchoolName] = useState(school?.schoolName || '')
  const [qual, setQual] = useState(school?.qual || '')
  const [dates, setDates] = useState(school?.dates || '')
  const handleSubmit = e => {
    e.preventDefault()
    if (!school) {
      setSchools(schools => [
        ...schools,
        { schoolName, qual, dates, id: uuidv4() },
      ])
      setSchoolName('')
      setQual('')
      setDates('')
    } else {
      setSchools(schools =>
        schools.map(sch => {
          if (sch.id === school.id) {
            sch = { schoolName, qual, dates, id: sch.id }
          }
          return sch
        })
      )
    }
  }

  const formStyles = () => {
    if (setCurrMenu) {
      return {
        display: !open ? 'none' : 'block',
      }
    } else {
      return {
        display: hidden ? 'none' : 'block',
      }
    }
  }

  return (
    <div className='form-container'>
      <AiFillEdit
        className='edit'
        onClick={() => {
          if (setCurrMenu) {
            open ? setCurrMenu(null) : setCurrMenu(index)
            setHidden(open)
          } else {
            setHidden(hidden => !hidden)
          }
        }}
      />
      <form
        className='form'
        onSubmit={handleSubmit}
        autoComplete='off'
        style={formStyles()}
      >
        <label htmlFor='schoolName'>School Name</label>
        <input
          type='text'
          placeholder='School Name'
          id='schoolName'
          value={schoolName}
          onChange={e => setSchoolName(e.target.value)}
          required
        />
        <label htmlFor='qual'>Qualification</label>
        <input
          type='text'
          placeholder='Qualification'
          id='qual'
          value={qual}
          onChange={e => setQual(e.target.value)}
          required
        />
        <label htmlFor='dates'>Time of Study</label>
        <input
          type='text'
          placeholder='Time of Study'
          id='dates'
          value={dates}
          onChange={e => setDates(e.target.value)}
        />
        <button type='submit'>{school ? 'Edit' : 'Add School'}</button>
      </form>
    </div>
  )
}

export default EducationForm
