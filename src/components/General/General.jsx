import { useState, useEffect } from 'react'
import './General.scss'
import GeneralForm from './GeneralForm'

const General = () => {
  const [firstName, setFirstName] = useState(
    JSON.parse(localStorage.getItem('general'))?.firstName || ''
  )
  const [lastName, setLastName] = useState(
    JSON.parse(localStorage.getItem('general'))?.lastName || ''
  )
  const [phone, setPhone] = useState(
    JSON.parse(localStorage.getItem('general'))?.phone || ''
  )
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem('general'))?.email || ''
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
          {firstName ? firstName : 'Enter your details =>'} {lastName}
        </h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default General
