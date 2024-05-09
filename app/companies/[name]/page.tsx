import getCompany from '@/util/get-company';
import Detail from '../Detail';
import { CompanyType, CompanyTypeWithId } from '@/app/types/company';
import companyModel from '@/models/Company';
import { fetchCompanies } from '@/app/lib/data';
import { Suspense } from 'react';

export async function generateStaticParams() {
  const companies: CompanyTypeWithId[] | undefined = await fetchCompanies();
  console.log(companies);
  return companies
    ? companies.map((company) => ({
        name: company.name,
      }))
    : [{ name: '예시' }];
}

export default async function CompanyDetail({
  params,
}: {
  params: { name: string };
}) {
  const company: CompanyTypeWithId | null = await getCompany(params.name);
  return (
    <Suspense>
      <Detail company={company} />
    </Suspense>
  );
}
