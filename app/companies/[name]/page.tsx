import getCompany from '@/util/get-company';
import ClientCompanyDetail from './CompanyDetail';
import Company, { ICompany } from '@/models/Company';
import Detail from '../Detail';
import { CompanyType } from '@/app/types/company';

export async function generateStaticParams() {
  const companies = await Company.find();
  return companies.map((company) => ({
    name: company.name,
  }));
}

export default async function CompanyDetail({
  params,
}: {
  params: { name: string };
}) {
  const company: CompanyType | null = await getCompany(params.name);

  console.log(company);
  return <Detail company={company} />;
}
