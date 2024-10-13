import { FaSearch } from "react-icons/fa";

const SearchButton = ({ title }: { title: string }) => {
  return (
    <>
      <button className="flex items-center drop-shadow-lg justify-center w-4/5 my-2 drop-shadow-lg mx-[10%] rounded-lg border-black border-1 h-[40px] text-center bg-white">
        <FaSearch size={20} />
        {title}
      </button>
    </>
  );
};

export default SearchButton;
