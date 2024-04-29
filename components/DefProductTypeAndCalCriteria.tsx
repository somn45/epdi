import axios from "axios";
import { useEffect, useState } from "react";

export default function DefProductTypeAndCalCriteria() {
  const [checked, setChecked] = useState(false);
  const [isFinishWorkProcess, setIsFinishWorkProcess] = useState(false);

  useEffect(() => {
    setChecked(isFinishWorkProcess);
  }, [isFinishWorkProcess]);

  const handleChangeCheckbox = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/api/companies/update",
      { name: "기업1", defProductTypeAndCalCriteria: isFinishWorkProcess ? false : true }
    );
    console.log(response);
    setIsFinishWorkProcess((isFinishWorkProcess) => !isFinishWorkProcess);
  };

  return (
    <div className="p-[5px] text-white">
      <h2>제품유형 및 계산기준 정의</h2>
      <label>내용 수행</label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChangeCheckbox}
      />
    </div>
  );
}
