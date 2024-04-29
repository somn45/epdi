"use client";

import DefProductTypeAndCalCriteria from "@/components/DefProductTypeAndCalCriteria";
import ResearchProductionSite from "@/components/ResearchProductionSite";
import { useState } from "react";

export default function ClientCompanyDetail({ name }: { name: string }) {
  const [currentEdpiContent, setCurrentEdpiContent] = useState(
    "defProductTypeAndCalCriteria"
  );

  type EpdiItemClickEvent = {
    [key: string]: JSX.Element;
  };

  const epdiItemClickEvent: EpdiItemClickEvent = {
    defProductTypeAndCalCriteria: <DefProductTypeAndCalCriteria />,
    researchProductionSite: <ResearchProductionSite />,
  };

  return (
    <div className="wrapper flex flex-col items-center">
      <div className="mt-[30px] flex flex-col items-center">
        <h1 className="text-[24px] font-semibold">
          기업 환경성적표지인증 상세 정보
        </h1>
        <h2 className="mt-[20px] text-[20px] text-slate-600">
          {decodeURI(name)}
        </h2>
      </div>

      <div className="w-[800px] flex">
        <ul className="w-[300px] p-[20px] bg-slate-300 flex-col items-center">
          <li
            onClick={() =>
              setCurrentEdpiContent("defProductTypeAndCalCriteria")
            }
            className="w-[240px] h-[40px] mb-[20px] bg-white rounded-md
            flex justify-center items-center
          "
          >
            제품유형 및 계산기준 정의
          </li>
          <li
            onClick={() => setCurrentEdpiContent("researchProductionSite")}
            className="w-[240px] h-[40px] mb-[20px] bg-white rounded-md
            flex justify-center items-center
          "
          >
            생산현장 조사
          </li>
        </ul>
        <div className="w-[560px] bg-slate-400">
          {epdiItemClickEvent[currentEdpiContent]}
        </div>
      </div>
    </div>
  );
}
