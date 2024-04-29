import connectDB from "@/config/connectDB";
import companyModel from "@/models/Company";
import "server-only";

const getCompany = async (name: string) => {
  await connectDB();
  const decodedName = decodeURI(name);
  const company = await companyModel.findOne({ name: decodedName });
  return company;
};

export default getCompany;
