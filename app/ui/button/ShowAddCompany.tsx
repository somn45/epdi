'use client';

import AddCompanyModal from '@/app/search/AddCompanyModal';
import { useState } from 'react';

export default function ShowAddCompany() {
  const [showsAddCompanyModal, setShowsAddCompanyModal] = useState(false);

  const handleAddCompany = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowsAddCompanyModal(true);
  };

  return (
    <>
      <button
        onClick={handleAddCompany}
        className="w-[80px] h-[40px] bg-emerald-600 rounded-md 
  outline-none text-sm text-white font-semibold
  hover:bg-emerald-800 focus:bg-emerald-800"
      >
        기업 추가
      </button>
      {showsAddCompanyModal && (
        <AddCompanyModal closeModal={() => setShowsAddCompanyModal(false)} />
      )}
    </>
  );
}
