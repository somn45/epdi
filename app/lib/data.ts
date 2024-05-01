import connectDB from '@/config/connectDB';
import companyModel from '@/models/Company';

export const fetchCompanies = async () => {
  try {
    await connectDB();
    const companies = await companyModel.find();
    return companies;
  } catch (error) {
    console.log(error);
  }
};
