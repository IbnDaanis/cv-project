import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'

const GeneralForm = ({ setFirstName, setLastName, setPhone, setEmail }) => {
  const [hidden, setHidden] = useState(true)
  const [firstNameInput, setFirstNameInput] = useState('')
  const [lastNameInput, setLastNameInput] = useState('')
  const [phoneInput, setPhoneInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    setFirstName(firstNameInput)
    setLastName(lastNameInput)
    setPhone(phoneInput)
    setEmail(emailInput)
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
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          placeholder='First Name'
          id='firstName'
          className='first-name'
          value={firstNameInput}
          onChange={e => setFirstNameInput(e.target.value)}
        />
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          placeholder='Last Name'
          id='lastName'
          className='last-name'
          value={lastNameInput}
          onChange={e => setLastNameInput(e.target.value)}
        />
        <label htmlFor='phone'>Phone Number</label>
        <input
          type='text'
          placeholder='Phone Number'
          id='phone'
          className='phone'
          value={phoneInput}
          onChange={e => setPhoneInput(e.target.value)}
        />

        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          placeholder='Email Address'
          id='email'
          className='email'
          value={emailInput}
          onChange={e => setEmailInput(e.target.value)}
        />
        <button type='submit'>Fill Details</button>
      </form>
    </div>
  )
}

export default GeneralForm
