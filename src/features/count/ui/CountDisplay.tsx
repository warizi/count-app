
function CountDisplay({
  number = 0,
}: {
  number: number;
}) {
  return (
    <div>
      <span className="">{number}</span>
    </div>
  );
};

export default CountDisplay;