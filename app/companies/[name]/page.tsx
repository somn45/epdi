import { companies } from "@/app/search/CompanyList";
import ClientCompanyDetail from "./CompanyDetail";

export function generateStaticParams() {
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
