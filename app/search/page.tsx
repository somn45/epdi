import { fetchCompanies } from "../lib/data";
import Search from "../ui/companies/search";
import ShowAddCompany from "../ui/button/ShowAddCompany";
import CompanyList from "./CompanyList";
import { CompanyType, CompanyTypeWithId } from "../types/company";
import { Suspense } from "react";

export default async function CompanySearch() {
  const companies: CompanyType[] | undefined = await fetchCompanies();

  return (
    <div className="wrapper flex flex-col items-center">
      <div className="w-[700px] mt-[50px] flex justify-between items-center">
        <Search />
        <ShowAddCompany />
      </div>

      <Suspense>
        <CompanyList companies={companies} />
      </Suspense>
    </div>
  );
}
