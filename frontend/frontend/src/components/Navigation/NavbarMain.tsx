import "../fonts.css"
const NavbarMain = () => {
  return (
    <div className="w-full drop-shadow-2xl bg-white p-4 h-[10%] flex flex-row items-center justify-center instrument-sans-bold">
      <h1 className="w-full text-center lg:text-left text-4xl lg:w-1/2 lg:pl-20 lg:grow-[4]">Fire Escape</h1>
      <h3 className="w-min flex grow-[1] hidden lg:flex">Settings</h3>
      <h3 className="flex grow-[1] hidden lg:flex">Logout</h3>
    </div>
  )
}

export default NavbarMain