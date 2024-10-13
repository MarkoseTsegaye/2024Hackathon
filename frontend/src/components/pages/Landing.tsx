import NavbarMain from "../Navigation/NavbarMain";
import LandingView from "../Views/LandingView";
import "../fonts.css";

const Landing = () => {
  return (
    <>
      <div className="h-screen instrument-sans-bold">
        <div className="w-full h-full flex flex-col">
          <NavbarMain />
          <LandingView />
        </div>
      </div>
    </>
  );
};

export default Landing;
