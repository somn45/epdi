import Company, { ICompany } from "@/models/Company";
import CompanyItem from "./CompanyItem";
import connectDB from "@/config/connectDB";
import ComapanyListHeader from "./CompanyListHeader";

export const getCompanies = async () => {
  try {
    await connectDB();
    const companies = await Company.find();
    return companies;
  } catch (error) {
    console.log(error);
  }
};

export default async function CompanyList() {
  const companies: ICompany[] | undefined = await getCompanies();
  return (
    <ul>
      <ComapanyListHeader />
      {companies?.map((company) => (
        <CompanyItem company={company} />
      ))}
    </ul>
  );
}
