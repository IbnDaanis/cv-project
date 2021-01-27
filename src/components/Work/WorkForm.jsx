import React, { useState, useRef } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'

const EducationForm = ({ setCompanies, company }) => {
  const [hidden, setHidden] = useState(true)
  const [companyName, setCompanyName] = useState(company?.companyName || '')
  const [position, setPosition] = useState(company?.position || '')
  const [desc, setDesc] = useState(company?.desc || '')
  const handleSubmit = e => {
    e.preventDefault()
    if (!company) {
      setCompanies(companies => [
        ...companies,
        { companyName, position, desc, id: uuidv4() },
      ])
      setCompanyName('')
      setPosition('')
      setDesc('')
    } else {
      setCompanies(companies =>
        companies.map(comp => {
          if (comp.id === company.id) {
            comp = { companyName, position, desc, id: comp.id }
          }
          return comp
        })
      )
    }
  }
  const formRef = useRef(null)

  return (
    <div className='form-container' ref={formRef}>
      <AiFillEdit
        className='edit'
        onClick={() => {
          setHidden(hidden => !hidden)
          hidden && formRef.current.scrollIntoView()
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
          required
        />
        <label htmlFor='positionTitle'>Position Title</label>
        <input
          type='text'
          placeholder='Position Name'
          id='positionTitle'
          value={position}
          onChange={e => setPosition(e.target.value)}
          required
        />
        <label htmlFor='positionDescription'>Position Description</label>
        <input
          type='text'
          placeholder='Position Dates, Job Description...'
          id='positionDescription'
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />

        <button type='submit'>{company ? 'Edit Work' : 'Add Work'}</button>
      </form>
    </div>
  )
}

export default EducationForm
