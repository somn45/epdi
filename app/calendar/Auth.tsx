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

    if (temp) setCompanyListExpiresIn3Month(temp);
  }, [companies]);

  return (
    <div>
      <h2>환경성적표지인증 만료 알림</h2>
      {companyListExpiresIn3Month.map((company) => (
        <li key={company.name}>{company.name}</li>
      ))}
    </div>
  );
}
