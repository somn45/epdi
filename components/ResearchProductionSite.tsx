import axios from "axios";
import { useEffect, useState } from "react";

export default function ResearchProductionSite({
  name,
  checked,
}: {
  name: string;
  checked: boolean;
}) {
  const [isFinishWorkProcess, setIsFinishWorkProcess] = useState(false);

  const handleChangeCheckbox = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/api/companies/update",
      {
        name,
        targetProgress: "researchProductionSite",
        isFinish: isFinishWorkProcess ? false : true,
      }
    );
    setIsFinishWorkProcess((isFinishWorkProcess) => !isFinishWorkProcess);
  };

  return (
    <div className="p-[5px] text-white">
      <h2>생산현장 조사</h2>
      <label>내용 수행</label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChangeCheckbox}
      />
    </div>
  );
}
