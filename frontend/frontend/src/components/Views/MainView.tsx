import Button from "../Buttons/Button";
import { Link } from "react-router-dom"; // Import Link component
import { MdWarning } from "react-icons/md"; // Material Design Warning icon
import HazardButton from "../Buttons/HazardButton";
import { FaSearch } from "react-icons/fa";
import SearchButton from "../Buttons/SearchButton";
import { Image } from "@nextui-org/react";
import "/floor_plan_1.png";
import "/the_fuse.jpg";

const MainView = () => {
  return (
    <div className="h-full bg-[#006633]">
      <div className="h-1/3 w-full text-center flex justify-center items-center flex-row">
        <h1 className="text-4xl font-bold drop-shadow-sm max-w-[35%] text-white">
          The Fuse
        </h1>
        <Image
          src="/the_fuse.jpg"
          alt="The Fuse"
          className="w-40 border-black border-1 drop-shadow-lg  mx-auto"
        />
      </div>
      <div className="h-1/3">
        <Link to="/map">
          <SearchButton title="Search Floors"></SearchButton>
        </Link>
      </div>
      <div className="h-min place-content-end"></div>
    </div>
  );
};

export default MainView;
