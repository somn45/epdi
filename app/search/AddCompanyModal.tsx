'use client';

import { useEffect, useRef, useState } from 'react';
import { addCompany, searchCompanies } from '../lib/actions';

export default function AddCompanyModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [companyName, setCompanyName] = useState('');
  const addCompanyModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickAddComapnyModalOut = (
      e: React.BaseSyntheticEvent | MouseEvent
    ) => {
      if (
        addCompanyModalRef.current &&
        !addCompanyModalRef.current.contains(e.target)
      )
        closeModal();
    };

    document.addEventListener('click', handleClickAddComapnyModalOut);
    return () => {
      document.removeEventListener('click', handleClickAddComapnyModalOut);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-slate-300/60 flex justify-center items-center fixed left-0 top-0">
      <div
        ref={addCompanyModalRef}
        className="w-[600px] h-[800px] p-[30px] bg-white"
      >
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-[20px] font-semibold">
            X
          </button>
        </div>
        <form action={addCompany} className="flex-col">
          <input
            type="text"
            name="name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="기업명"
            className="w-[320px] h-[40px] bg-green-200"
          />
          <div className="my-[10px]">
            <label>인증 유효 날짜 선택</label>
            <input type="date" name="authExpiresIn" />
          </div>
          <input
            type="submit"
            value="기업 추가"
            onClick={() => {}}
            className="w-[100px] h-[40px] ml-[10px] 
            bg-slate-200 border-2 border-green-400 text-green-400 font-semibold
            hover:border-green-800 hover:text-green-700
            cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
