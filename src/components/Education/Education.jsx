import { useState, useEffect } from 'react'
import './Education.scss'
import EducationForm from './EducationForm'
import { MdDelete } from 'react-icons/md'

const Education = () => {
  const [schools, setSchools] = useState(
    JSON.parse(localStorage.getItem('education')) || []
  )
  const deleteSchool = id => {
    setSchools(schools => schools.filter(school => school.id !== id))
  }
  useEffect(() => {
    localStorage.setItem('education', JSON.stringify(schools))
  }, [schools])

  return (
    <div className='education'>
      <EducationForm setSchools={setSchools} schools={schools} />
      <h1 className='title'>Education</h1>
      <div className='details'>
        {schools.map(school => {
          return (
            <div className='school-experience' key={school.id}>
              <div className='school-container'>
                <h3 className='school'>{school.schoolName}</h3>
                <button
                  className='delete-btn'
                  onClick={() => deleteSchool(school.id)}
                  title='Delete Work Experience'
                >
                  <MdDelete />
                </button>
              </div>
              <p className='qual'>{school.qual}</p>
              <p className='dates'>{school.dates}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Education
