import axios from 'axios';
import { useState } from 'react';
import { addCompany, searchCompanies } from '../lib/actions';

export default function AddCompanyModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  return (
    <div className="w-full h-screen bg-slate-300/60 flex justify-center items-center fixed left-0 top-0">
      <div className="w-[600px] h-[800px] p-[30px] bg-white">
        <button onClick={closeModal}>X</button>
        <form action={addCompany}>
          <input
            type="text"
            name="name"
            placeholder="기업명"
            className="w-[320px] h-[40px] bg-green-200"
          />
          <input type="submit" value="기업 추가" className="ml-[10px]" />
        </form>
      </div>
    </div>
  );
}
