import { useState } from 'react';
import AddCompanyModal from './AddCompanyModal';
import { fetchCompanies } from '../lib/data';
import Search from '../ui/companies/search';
import { ICompany } from '@/models/Company';
import CompanyItem from './CompanyItem';
import ComapanyListHeader from './CompanyListHeader';
import ShowAddCompany from '../ui/button/ShowAddCompany';
import { useSearchParams } from 'next/navigation';
import CompanyList from './CompanyList';

export default async function CompanySearch() {
  const companies: ICompany[] | undefined = await fetchCompanies();

  return (
    <div className="wrapper flex flex-col items-center">
      <div className="w-[700px] mt-[50px] flex justify-between items-center">
        <Search />
        <ShowAddCompany />
      </div>

      <CompanyList companies={companies!} />
    </div>
  );
}
