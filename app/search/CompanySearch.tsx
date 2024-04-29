"use client";

import { useState } from "react";
import ComapanyListHeader from "./CompanyListHeader";
import AddCompanyModal from "./AddCompanyModal";

export default function CompanySearchPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const [keyword, setKeyword] = useState("");
  const [showsAddCompanyModal, setShowsAddCompanyModal] = useState(false);

  const handleAddCompany = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowsAddCompanyModal(true);
  };

  const handleSearchCompanies = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(keyword);
  };

  return (
    <div className="wrapper flex flex-col items-center">
      <div className="w-[800px] h-[100px] pt-[60px] flex flex-row justify-between">
        <form className="w-[450px] h-[40px]">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="기업 검색"
            className="w-[400px] h-[40px] border border-slate-300"
          />
          <input
            type="submit"
            value="검색"
            onClick={handleSearchCompanies}
            className="w-[50px] h-[40px] bg-slate-300 text-sm font-semibold"
          />
        </form>
        <button
          onClick={handleAddCompany}
          className="w-[80px] h-[40px] bg-emerald-600 rounded-md 
        outline-none text-sm text-white font-semibold
        hover:bg-emerald-800 focus:bg-emerald-800"
        >
          기업 추가
        </button>
      </div>
      <div className="mt-[50px]">{children}</div>
      {showsAddCompanyModal && (
        <AddCompanyModal closeModal={() => setShowsAddCompanyModal(false)} />
      )}
    </div>
  );
}
