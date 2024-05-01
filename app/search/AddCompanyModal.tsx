import axios from 'axios';
import { useState } from 'react';
import { searchCompanies } from '../lib/actions';

export default function AddCompanyModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [name, setName] = useState('');

  const handleAddCompany = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const response = await axios.post(
      'http://localhost:3000/api/companies/add',
      {
        name,
      }
    );
    console.log(response);
  };

  return (
    <div className="w-full h-screen bg-slate-300/60 flex justify-center items-center fixed left-0 top-0">
      <div className="w-[600px] h-[800px] p-[30px] bg-white">
        <button onClick={closeModal}>X</button>
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="기업명"
            className="w-[320px] h-[40px] bg-green-200"
          />
          <input
            type="submit"
            value="기업 추가"
            onClick={handleAddCompany}
            className="ml-[10px]"
          />
        </form>
      </div>
    </div>
  );
}
