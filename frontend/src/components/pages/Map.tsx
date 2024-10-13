import BottomNav from "../Navigation/BottomNav";
import NavbarMain from "../Navigation/NavbarMain";
import MapView from "../Views/MapView";
import "../fonts.css";

const Map = () => {
  return (
    <>
      <div className="h-screen instrument-sans-bold">
        <div className="w-full h-full flex flex-col">
          <NavbarMain />
          <MapView />
          <BottomNav />
        </div>
      </div>
    </>
  );
};

export default Map;
