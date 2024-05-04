import { unstable_noStore as noStore } from 'next/cache';
import connectDB from '@/config/connectDB';
import companyModel from '@/models/Company';

export const fetchCompanies = async () => {
  noStore();
  try {
    const companies = await companyModel.find().lean();
    return JSON.parse(JSON.stringify(companies));
  } catch (error) {
    console.log(error);
  }
};
