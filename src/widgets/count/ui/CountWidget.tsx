import { useCountStore } from "@features/count";
import CountDisplay from "@features/count/ui/CountDisplay";
import CountButton from "@shared/components/buttons/CountButton";
import ResetButton from "@shared/components/buttons/ResetButton";

function CountWidget() {
  const { count, increment, reset } = useCountStore();
  return (
    <div className="w-[500px] h-[500px] flex items-center justify-center gap-4 flex-col">
      <CountDisplay number={count} />
      <div className="flex items-center justify-center gap-4 flex-row">
        <CountButton onClick={increment} />
        <ResetButton onClick={reset} />
      </div>
    </div>
  );
};

export default CountWidget;