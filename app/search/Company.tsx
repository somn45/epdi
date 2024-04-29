import Link from "next/link";
import type { Company } from "./CompanyList";

export default function Company({ company }: { company: Company }) {
  return (
    <li className="w-[700px] h-[20px] mb-[20px] flex">
      <h2 className="w-[120px] text-center">
        <Link href={`/companies/${company.name}`}>{company.name}</Link>
      </h2>
      <h5 className="w-[180px] text-center">{company.workProcess}</h5>
      <p className="w-[250px] bg-blue-500 text-center">
        {company.defProductTypeAndCalCriteria}
      </p>
      <p className="w-[150px] bg-green-500 text-center">
        {company.researchProductionSite}
      </p>
    </li>
  );
}
