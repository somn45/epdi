import { searchCompanies } from '@/app/lib/actions';
import { useState } from 'react';

export default function Search() {
  return (
    <form action={searchCompanies} className="w-[450px] h-[40px]">
      <input
        type="text"
        name="keyword"
        placeholder="기업 검색"
        className="w-[400px] h-[40px] border border-slate-300"
      />
      <input
        type="submit"
        value="검색"
        className="w-[50px] h-[40px] bg-slate-300 text-sm font-semibold"
      />
    </form>
  );
}
