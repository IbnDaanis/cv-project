import { useState, useEffect } from 'react'
import './General.scss'
import GeneralForm from './GeneralForm'

const General = () => {
  const [firstName, setFirstName] = useState(
    JSON.parse(localStorage.getItem('general')).firstName || 'First name'
  )
  const [lastName, setLastName] = useState(
    JSON.parse(localStorage.getItem('general')).lastName || 'Last name'
  )
  const [phone, setPhone] = useState(
    JSON.parse(localStorage.getItem('general')).phone || 'Phone number'
  )
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem('general')).email || 'Email'
  )

  useEffect(() => {
    localStorage.setItem(
      'general',
      JSON.stringify({ firstName, lastName, phone, email })
    )
  }, [firstName, lastName, phone, email])
  return (
    <div className='general'>
      <GeneralForm
        setFirstName={setFirstName}
        setLastName={setLastName}
        setPhone={setPhone}
        setEmail={setEmail}
        information={{ firstName, lastName, phone, email }}
      />
      <div className='details'>
        <h3 className='name'>
          {firstName} {lastName}
        </h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default General
