"use client";

import ComapanyListHeader from "./CompanyListHeader";
import CompanyItem from "./CompanyItem";
import { useSearchParams } from "next/navigation";
import { CompanyType } from "../types/company";

export default function CompanyList({
  companies,
}: {
  companies: CompanyType[] | undefined;
}) {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  if (!companies) {
    return <div>등록된 기업이 없습니다.</div>;
  }
  return (
    <ul className="mt-[40px]">
      <ComapanyListHeader />
      {keyword
        ? companies
            ?.filter((company) => {
              const searchRegExp = new RegExp(keyword);
              return searchRegExp.test(company.name);
            })
            .map((company) => (
              <CompanyItem key={company.name} company={company} />
            ))
        : companies?.map((company) => (
            <CompanyItem key={company.name} company={company} />
          ))}
    </ul>
  );
}
