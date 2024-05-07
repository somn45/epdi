import Link from "next/link";
import { CompanyType } from "../types/company";

export default function CompanyItem({ company }: { company: CompanyType }) {
  return (
    <li
      className="w-[1200px] h-[80px] pb-[20px] border-b-2 border-dashed
     flex items-center"
    >
      <h2
        className="w-[150px] h-full
        text-[18px] text-slate-900 font-semibold
      flex justify-center items-center"
      >
        <Link
          href={`/companies/${company.name}`}
          className="px-[20px] py-[10px]"
        >
          {company.name}
        </Link>
      </h2>
      <h5
        className="w-[250px] h-full text-[14px] text-slate-600
      flex justify-center items-center px-[20px]"
      >
        {company.currentProcess}
      </h5>
      <p
        className={`w-[250px] h-[30px] ${
          company.salesAndInfoStartUp.isPass ? "bg-red-600" : "bg-transparent"
        }`}
      ></p>
      <p
        className={`w-[150px] h-[30px] ${
          company.collectData.isPass ? "bg-orange-600" : "bg-transparent"
        }`}
      ></p>
      <p
        className={`w-[150px] h-[30px] ${
          company.applyCertification.isPass ? "bg-yellow-400" : "bg-transparent"
        }`}
      ></p>
      <p
        className={`w-[100px] h-[30px] ${
          company.audit.isPass ? "bg-green-600" : "bg-transparent"
        }`}
      ></p>
      <p
        className={`w-[150px] h-[30px] ${
          company.issueCertification.isPass ? "bg-blue-600" : "bg-transparent"
        }`}
      ></p>
    </li>
  );
}
