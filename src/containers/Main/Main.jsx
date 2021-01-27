import './Main.scss'
import { General, Education, Work } from '../../components'

const Main = () => {
  return (
    <main>
      <div className='container'>
        <General />
        <Education />
        <Work />
      </div>
    </main>
  )
}

export default Main
