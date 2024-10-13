import { MdWarning } from "react-icons/md";
interface ButtonComponentProps {
  onClick: () => void; // Function passed from parent
  title: string;
}
const HazardButton: React.FC<ButtonComponentProps> = ({ title, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="flex drop-shadow-lg font-bold items-center justify-center w-4/5 my-2 drop-shadow-lg mx-[10%] rounded-lg border-black border-1 h-[40px] text-center bg-white"
      >
        {" "}
        <MdWarning size={24} color="red" />
        {title}
      </button>
    </>
  );
};

export default HazardButton;
