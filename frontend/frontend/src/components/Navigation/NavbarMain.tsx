import "../fonts.css"
import { MdHome } from 'react-icons/md';

import { MdAccountCircle } from 'react-icons/md'; // Material Design Account icon
const NavbarMain = () => {
  return (
    <div className="w-full drop-shadow-2xl bg-white p-4 h-[10%] flex flex-row items-center justify-center instrument-sans-bold">
      <h1 className="w-full text-center lg:text-left text-4xl lg:w-1/2 lg:pl-20 lg:grow-[4]">Fire Escape</h1>
      <div className="hidden lg:flex">
      <MdHome size = {24} />
      <h3 className="w-min flex grow-[1]">Home</h3>
      </div>
      <div className="hidden lg:flex ml-14">
      <MdAccountCircle size={24} />
        <h3 className="flex grow-[1]">Account</h3>
        </div>
    </div>
  )
}

export default NavbarMain