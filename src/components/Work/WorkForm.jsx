import React, { useState, useRef } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'

const EducationForm = ({ companies, setCompanies }) => {
  const [hidden, setHidden] = useState(true)
  const [companyName, setCompanyName] = useState('')
  const [position, setPosition] = useState('')
  const [desc, setDesc] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    setCompanyName('')
    setPosition('')
    setDesc('')
    setCompanies([...companies, { companyName, position, desc, id: uuidv4() }])
  }
  const formRef = useRef(null)

  return (
    <div className='form-container' ref={formRef}>
      <AiFillEdit
        className='edit'
        onClick={() => {
          hidden && formRef.current.scrollIntoView()
          setHidden(hidden => !hidden)
        }}
      />
      <form
        className='form'
        onSubmit={handleSubmit}
        autoComplete='off'
        style={{ display: hidden ? 'none' : 'block' }}
      >
        <label htmlFor='companyName'>Company Name</label>
        <input
          type='text'
          placeholder='Company Name'
          id='companyName'
          value={companyName}
          onChange={e => setCompanyName(e.target.value)}
        />
        <label htmlFor='positionTitle'>Position Title</label>
        <input
          type='text'
          placeholder='Position Name'
          id='positionTitle'
          value={position}
          onChange={e => setPosition(e.target.value)}
        />
        <label htmlFor='positionDescription'>Position Description</label>
        <input
          type='text'
          placeholder='Position Description'
          id='positionDescription'
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />

        <button type='submit'>Add Work</button>
      </form>
    </div>
  )
}

export default EducationForm
