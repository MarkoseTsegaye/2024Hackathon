import Button from '../Button'
import { Link } from 'react-router-dom'; // Import Link component

const MainView = () => {
  return (
    <div className='h-full'>
        <div className='h-2/3'></div>
        <div className='h-1/3 place-content-end'>
        <Link to="/map">
        <Button title="Report A Fire"></Button>
        </Link>
        <Button title="Search Floors"></Button>
        </div>
    </div>
  )
}

export default MainView