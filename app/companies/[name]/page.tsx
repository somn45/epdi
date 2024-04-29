import getCompany from "@/util/get-company";
import ClientCompanyDetail from "./CompanyDetail";
import Company from "@/models/Company";

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
  const company = await getCompany(params.name);
  console.log(company);
  return <ClientCompanyDetail company={company} />;
}
