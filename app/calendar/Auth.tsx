"use client";

import { useEffect, useState } from "react";
import { CompanyType } from "../types/company";

export default function Auth({
  companies,
}: {
  companies: CompanyType[] | undefined;
}) {
  const [companyListExpiresIn3Month, setCompanyListExpiresIn3Month] = useState<
    CompanyType[]
  >([]);

  useEffect(() => {
    const temp = companies?.filter((company) => {
      if (
        company.authExpiresIn &&
        company.authExpiresIn < new Date(Date.now() + 1000 * 60 * 60 * 24 * 90)
      ) {
        return true;
      }
      return false;
    });
    console.log(temp);

    if (temp) setCompanyListExpiresIn3Month(temp);
  }, [companies]);

  return (
    <div>
      <h2>환경성적표지인증 만료 알림</h2>
      {companyListExpiresIn3Month.map((company) => (
        <li
          key={company.name}
          className="w-[400px] h-[160px] p-[10px] shadow-md flex items-center
              hover:scale-110 duration-75 ease-out
              "
        >
          {company.image ? (
            <img src="company.image" alt="company.name" />
          ) : (
            <div
              className="w-[120px] h-[120px] bg-slate-400
              flex justify-center items-center"
            >
              <h5 className="text-[14px] text-white font-semibold">
                🛠️ Images
              </h5>
            </div>
          )}
          <div className="ml-[10px] flex flex-col">
            <h2 className="text-[18px] font-semibold text-green-900">
              {company.name}
            </h2>
            {company.salesAndInfoStartUp.start && (
              <>
                <p className="text-[14px] font-semibold text-slate-700">
                  인증 시작일자 :{" "}
                </p>
                <p className="text-[14px] text-slate-600">{`${company.salesAndInfoStartUp.start?.getFullYear()}년 ${
                  company.salesAndInfoStartUp.start?.getMonth() + 1
                }월 ${company.salesAndInfoStartUp.start?.getDate()}일 ${company.salesAndInfoStartUp.start.getHours()}시 ${company.salesAndInfoStartUp.start.getMinutes()}분`}</p>
              </>
            )}
            <p className="text-[14px]">
              현재 인증 과정: {company.currentProcess}
            </p>
          </div>
        </li>
      ))}
    </div>
  );
}
