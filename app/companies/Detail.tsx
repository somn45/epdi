"use client";

import EpdiMainItem from "../ui/button/EpdiMainItem";
import { CompanyType } from "../types/company";
import EpdiSubList from "../ui/companies/EpdiSubList";
import { useState } from "react";

type EpdiMainItemClickEvent = {
  [key: string]: JSX.Element;
};

export default function Detail({ company }: { company: CompanyType | null }) {
  const [curEpdiMainItem, setCurEpdiMainItem] = useState("영업 및 착수안내");

  const epdiMainItemClickEvent: EpdiMainItemClickEvent = {
    "영업 및 착수 안내": (
      <EpdiSubList
        companyName={company!.name}
        isActive={company?.currentProcess === "영업 및 착수 안내"}
        mainItem={company?.salesAndInfoStartUp}
      />
    ),
    "데이터 수집": (
      <EpdiSubList
        companyName={company!.name}
        isActive={company?.currentProcess === "데이터 수집"}
        mainItem={company?.collectData}
      />
    ),
    "인증서 신청": (
      <EpdiSubList
        companyName={company!.name}
        isActive={company?.currentProcess === "인증서 신청"}
        mainItem={company?.applyCertification}
      />
    ),
    심사: (
      <EpdiSubList
        companyName={company!.name}
        isActive={company?.currentProcess === "심사"}
        mainItem={company?.audit}
      />
    ),
    "인증서 발급": (
      <EpdiSubList
        companyName={company!.name}
        isActive={company?.currentProcess === "인증서 발급"}
        mainItem={company?.issueCertification}
      />
    ),
  };

  return (
    <div className="wrapper flex flex-col items-center">
      <div className="h-[150px] mt-[30px] flex-col items-center">
        <h1 className="text-[24px] font-semibold">
          기업 환경성적표지인증 상세 정보
        </h1>
        <h2 className="text-[20px] text-slate-600">
          {decodeURI(company!.name)}
        </h2>

        <ul className="w-[1000px] mt-[40px] flex items-center">
          {company?.mainProcess.map((processName) => (
            <EpdiMainItem
              key={processName}
              content={processName}
              onClick={() => setCurEpdiMainItem(processName)}
            />
          ))}
        </ul>
      </div>

      <div className="w-[1000px] h-[600px] flex">
        {epdiMainItemClickEvent[curEpdiMainItem]}
      </div>
    </div>
  );
}
