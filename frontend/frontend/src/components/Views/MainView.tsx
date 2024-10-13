import Button from '../Button'
import { Link } from 'react-router-dom'; // Import Link component
import { MdWarning } from 'react-icons/md'; // Material Design Warning icon
import HazardButton from '../HazardButton';

const MainView = () => {
  return (
    <div className='h-full'>
        <div className='h-2/3'></div>
        <div className='h-1/3 place-content-end'>
        <Link to="/map">
        <HazardButton title="Report A Fire"></HazardButton>
        </Link>
        <Button title="Search Floors"></Button>
        </div>
    </div>
  )
}

export default MainView