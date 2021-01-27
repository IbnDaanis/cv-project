import { useState } from 'react'
import './Work.scss'
import WorkForm from './WorkForm'
import { v4 as uuidv4 } from 'uuid'
import { MdDelete } from 'react-icons/md'

const Work = () => {
  const [companies, setCompanies] = useState([])
  const deleteWork = id => {
    setCompanies(companies => companies.filter(company => company.id !== id))
  }
  return (
    <div className='work'>
      <WorkForm companies={companies} setCompanies={setCompanies} />
      <h1 className='title'>Work</h1>
      <div className='details'>
        {companies.map(company => {
          return (
            <div className='work-experience' key={uuidv4()}>
              <div className='company-container'>
                <h3 className='company'>{company.companyName}</h3>
                <button
                  className='delete-btn'
                  onClick={() => deleteWork(company.id)}
                  title='Delete Work Experience'
                >
                  <MdDelete />
                </button>
              </div>
              <p>{company.position}</p>
              <p>{company.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work
