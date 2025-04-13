
function ResetButton({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} type="button">
      reset
    </button>
  );
};

export default ResetButton;