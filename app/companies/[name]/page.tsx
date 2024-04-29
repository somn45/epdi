import ClientCompanyDetail from "./CompanyDetail";
import Company from "@/models/Company";

export async function generateStaticParams() {
  const companies = await Company.find();
  return companies.map((company) => ({
    name: company.name,
  }));
}

export default function CompanyDetail({
  params,
}: {
  params: { name: string };
}) {
  return <ClientCompanyDetail name={params.name} />;
}
