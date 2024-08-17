import { FC } from "react";
import { useAppStore } from "../../../app/store";

const options = ["Option A", "Option B", "Option C"]

export const RadioSelection: FC = () => {
  const { selectedOption, setSelectedOption } = useAppStore();

  return (
    <div className={"flex flex-col gap-2"}>
      {options.map((option) => (
        <label key={option} className="flex gap-2">
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => setSelectedOption(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};
