import Button from '../Button'
import { Link } from 'react-router-dom'; // Import Link component
import { MdWarning } from 'react-icons/md'; // Material Design Warning icon
import HazardButton from '../HazardButton';
import { FaSearch } from 'react-icons/fa';
import SearchButton from '../SearchButton';
import { Image } from '@nextui-org/react';
import "/floor_plan_1.png"
import "/fuse.jpg"


const MainView = () => {
  return (
    <div className='h-full bg-[#006633]'>
        <div className='h-1/3 w-full text-center flex flex-wrap'></div>
        <h1>The Fuse</h1>
        <Image src="/fuse.jpg"/>
        <div className='h-1/3'>
        <Link to="/map">
        <HazardButton title="Report A Fire"></HazardButton>
        </Link>
        <SearchButton title="Search Floors"></SearchButton>
        </div>
        <div className='h-min place-content-end'>
        
        </div>
    </div>
  )
}

export default MainView