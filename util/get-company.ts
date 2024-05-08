import { unstable_noStore as noStore } from "next/cache";
import connectDB from "@/config/connectDB";
import companyModel from "@/models/Company";
import "server-only";

const getCompany = async (name: string) => {
  noStore();
  await connectDB();
  const decodedName = decodeURI(name);
  const company = await companyModel.findOne({ name: decodedName }).lean();
  return JSON.parse(JSON.stringify(company));
};

export default getCompany;
