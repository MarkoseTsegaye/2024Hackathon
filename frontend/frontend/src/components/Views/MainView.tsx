import { Link } from "react-router-dom"; // Import Link component

import SearchButton from "../Buttons/SearchButton";
import { Image } from "@nextui-org/react";
import "/floor_plan_1.png";
import "/the_fuse.jpg";

const MainView = () => {
  return (
    <div className="h-full bg-[#006633]">
      <div className="h-1/3 w-full text-center flex justify-center items-center mt-10 flex-col ">
        <h1 className="text-4xl font-bold drop-shadow-sm max-w-[35%] mb-2 text-white">
          The Fuse
        </h1>
        <Image
          src="/the_fuse.jpg"
          alt="The Fuse"
          className="w-40 border-black border-1 drop-shadow-lg  mx-auto"
        />
      </div>
      <div className="h-1/3 mt-8">
        <Link to="/map">
          <SearchButton title="Search Floors"></SearchButton>
        </Link>
      </div>
      <div className="h-min place-content-end text-center">
        <ul>
          <li className="text-white">Emergency: 911</li>

          <li className="text-white">GMU Police: Phone: (703) 993-2810</li>
          <li className="text-white">
            GMU Env. Health & Safety: Phone: (703) 993-8448
          </li>
          <li className="text-blue-400">
            <Link to="https://ready.gmu.edu/">
              Campus Safety Information: Website
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainView;
