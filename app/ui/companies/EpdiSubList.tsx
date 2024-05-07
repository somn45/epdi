import { EpdiMainItem } from "@/app/types/company";
import { useState } from "react";
import EpdiProcess from "./EpdiProcess";

interface EpdiSubListProps {
  companyName?: string;
  isActive: boolean;
  mainItem?: EpdiMainItem;
}

export default function EpdiSubList({
  companyName,
  isActive,
  mainItem,
}: EpdiSubListProps) {
  const [curEpdiSubItem, setCurEpdiSubItem] = useState(
    mainItem?.subProcess[0].subName
  );

  return (
    <>
      <div className="w-[300px] py-[20px] bg-slate-200 flex flex-col items-center">
        <h1 className="text-[18px] font-semibold mb-[40px]">
          {mainItem?.name}
        </h1>
        <ul className="w-full">
          {mainItem?.subProcess.map((sub) => (
            <li
              key={sub.subName}
              className={`w-full h-[80px] mb-[20px] flex justify-center items-center 
              ${sub.isPass ? "text-green-500 font-semibold" : "text-black"}
              ${curEpdiSubItem === sub.subName ? "bg-green-200" : ""}`}
            >
              <button
                value={sub.subName}
                onClick={() => setCurEpdiSubItem(sub.subName)}
                className="w-1/2 h-1/2 text-[16px]"
              >
                {sub.subName}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[700px] bg-green-200">
        {mainItem?.subProcess
          .filter((sub) => sub.subName === curEpdiSubItem)
          .map((sub) => (
            <EpdiProcess
              key={sub.subName}
              companyName={companyName ? companyName : ""}
              mainName={mainItem.name}
              subName={sub.subName}
              detail={sub.detail}
              isActive={isActive}
            />
          ))}
      </div>
    </>
  );
}
