import AngryImg from "../../assets/images/angry.png";

function CountButton({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <button className="" type="button" onClick={onClick}>
      <img src={AngryImg} alt="count button"  className="w-[100px]"/>
    </button>
  );
};

export default CountButton;