import { ICompany } from "@/models/Company";
import Link from "next/link";

export default function CompanyItem({ company }: { company: ICompany }) {
  console.log(company.workProcess.researchProductionSite.isPass);
  return (
    <li className="w-[700px] h-[20px] mb-[40px] flex">
      <h2 className="w-[120px] text-center">
        <Link href={`/companies/${company.name}`}>{company.name}</Link>
      </h2>
      <h5 className="w-[180px] px-[20px] text-center">
        {company.currentProcess}
      </h5>
      <p
        className={`w-[250px] text-center ${
          company.workProcess.defProductTypeAndCalCriteria.isPass &&
          "bg-blue-500"
        }`}
      ></p>
      <p
        className={`w-[150px] text-center ${
          company.workProcess.researchProductionSite.isPass && "bg-green-500"
        }`}
      ></p>
    </li>
  );
}
