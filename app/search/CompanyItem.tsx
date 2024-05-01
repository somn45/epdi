import { ICompany } from '@/models/Company';
import Link from 'next/link';

export default function CompanyItem({ company }: { company: ICompany }) {
  return (
    <li className="w-[1200px] h-[20px] mb-[40px] flex">
      <h2 className="w-[150px] text-center">
        <Link href={`/companies/${company.name}`}>{company.name}</Link>
      </h2>
      <h5 className="w-[250px] px-[20px] text-center">
        {company.currentProcess}
      </h5>
      <p
        className={`w-[250px] text-center ${
          company.salesAndInfoStartUp.isPass && 'bg-blue-500'
        }`}
      ></p>
      <p
        className={`w-[150px] text-center ${
          company.collectData.isPass && 'bg-green-500'
        }`}
      ></p>
    </li>
  );
}
