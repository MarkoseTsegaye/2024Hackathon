import { Link } from "react-router-dom";
import Button from "../Buttons/Button";

const AccountView = () => {
  return (
    <div className="h-full bg-[#006633]">
      <div className="h-1/3 place-content-end">
        <Button title="Profile"></Button>
        <Button title="Settings"></Button>
        <Button title="Contact Us"></Button>
        <Link to="/">
          <Button title="Logout"></Button>
        </Link>
      </div>
    </div>
  );
};

export default AccountView;
