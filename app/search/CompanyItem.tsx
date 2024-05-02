import { ICompany } from "@/models/Company";
import Link from "next/link";
import { CompanyType } from "../types/company";

export default function CompanyItem({ company }: { company: CompanyType }) {
  return (
    <li className="w-[1200px] h-[20px] mb-[40px] flex">
      <h2 className="w-[150px] text-center">
        <Link href={`/companies/${company.name}`}>{company.name}</Link>
      </h2>
      <h5 className="w-[250px] px-[20px] text-center">
        {company.currentProcess}
      </h5>
    </li>
  );
}
