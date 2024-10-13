import BottomNav from "../Navigation/BottomNav";
import AccountView from "../Views/AccountView";
import NavbarMain from "../Navigation/NavbarMain";
import "../fonts.css";

const Account = () => {
  return (
    <>
      <div className="h-screen instrument-sans-bold">
        <div className="w-full h-full flex flex-col">
          <NavbarMain />
          <AccountView />
          <BottomNav />
        </div>
      </div>
    </>
  );
};

export default Account;
