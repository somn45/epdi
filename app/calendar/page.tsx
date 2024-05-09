import { Suspense } from "react";
import { fetchCompanies } from "../lib/data";
import Auth from "./Auth";
import { CompanyType } from "../types/company";

export default async function Calendar() {
  const companies: CompanyType[] | undefined = await fetchCompanies();
  console.log(companies);

  return (
    <div className="wrapper flex flex-col items-center">
      <Suspense>
        <Auth companies={companies} />
      </Suspense>
    </div>
  );
}
