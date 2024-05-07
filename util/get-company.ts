<<<<<<< HEAD
import { unstable_noStore as noStore } from "next/cache";
import connectDB from "@/config/connectDB";
import companyModel from "@/models/Company";
import "server-only";
=======
import { unstable_noStore as noStore } from 'next/cache';
import connectDB from '@/config/connectDB';
import companyModel from '@/models/Company';
import 'server-only';
>>>>>>> 85a57aa3821778583db2dc1d142fb1fb7b492f5d

const getCompany = async (name: string) => {
  noStore();
  await connectDB();
  const decodedName = decodeURI(name);
  const company = await companyModel.findOne({ name: decodedName }).lean();
  return company;
};

export default getCompany;
