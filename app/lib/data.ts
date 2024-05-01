import connectDB from '@/config/connectDB';
import companyModel from '@/models/Company';

export const fetchCompanies = async () => {
  try {
    const companies = await companyModel.find();
    return companies;
  } catch (error) {
    console.log(error);
  }
};
