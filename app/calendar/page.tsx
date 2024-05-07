import { Suspense } from "react";
import { fetchCompanies } from "../lib/data";
import Auth from "./Auth";
import { CompanyType } from "../types/company";

export default async function Search() {
  const companies: CompanyType[] | undefined = await fetchCompanies();

  return (
    <div className="wrapper flex flex-col items-center">
      <Suspense>
        <Auth companies={companies} />
      </Suspense>
    </div>
  );
}
