import { MdWarning } from "react-icons/md"

const HazardButton = ({title} : {title : string}) => {

    return (
        <>
      <button className='flex items-center justify-center w-4/5 my-2 drop-shadow-lg mx-[10%] rounded-lg border-black border-1 h-[40px] text-center bg-white'>        <MdWarning size={24} color="red" />
      {title}</button>
      </>
    )
  }
  
  export default HazardButton