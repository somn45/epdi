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
