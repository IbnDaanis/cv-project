import { useState } from 'react'
import './General.scss'
import GeneralForm from './GeneralForm'

const General = () => {
  const [firstName, setFirstName] = useState('First name')
  const [lastName, setLastName] = useState('Last name')
  const [phone, setPhone] = useState('Phone number')
  const [email, setEmail] = useState('Email')
  return (
    <div className='general'>
      <GeneralForm
        setFirstName={setFirstName}
        setLastName={setLastName}
        setPhone={setPhone}
        setEmail={setEmail}
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
