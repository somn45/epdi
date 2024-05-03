import getCompany from "@/util/get-company";
import Detail from "../Detail";
import { CompanyType } from "@/app/types/company";
import companyModel from "@/models/Company";
import { fetchCompanies } from "@/app/lib/data";

export async function generateStaticParams() {
  const companies = await fetchCompanies();
  return companies?.map((company) => ({
    name: company.name,
  }));
}

export default async function CompanyDetail({
  params,
}: {
  params: { name: string };
}) {
  const company: CompanyType | null = await getCompany(params.name);
  return <Detail company={company} />;
}
