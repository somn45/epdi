'use client';

import { updateCompanyEpdiCheckList } from '@/app/lib/actions';
import { EpdiDetail } from '@/app/types/company';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface EpdiProcessProps {
  companyName: string;
  mainName: string;
  subName: string;
  isActive: boolean;
  detail: EpdiDetail[];
}

export default function EpdiProcess({
  companyName,
  mainName,
  subName,
  isActive,
  detail,
}: EpdiProcessProps) {
  const [epdidetailCheckList, setEpdidetailCheckList] = useState(detail);

  const handleChangeCheckList = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEpdidetailCheckList(
      epdidetailCheckList.map((checkItem) =>
        checkItem.content === e.target.value
          ? { content: checkItem.content, checked: !checkItem.checked }
          : checkItem
      )
    );
  };

  const updateCompanyEpdiDetail = updateCompanyEpdiCheckList.bind(
    null,
    companyName,
    mainName,
    subName,
    epdidetailCheckList
  );

  return (
    <li className="p-[30px] list-none">
      <form action={updateCompanyEpdiDetail}>
        <ul>
          {epdidetailCheckList.map((epdiDetail) => (
            <li key={epdiDetail.content}>
              <input
                type="checkbox"
                name={epdiDetail.content}
                value={epdiDetail.content}
                checked={epdiDetail.checked}
                onChange={handleChangeCheckList}
                disabled={!isActive}
              />
              {epdiDetail.content}
            </li>
          ))}
        </ul>
        <input
          type="submit"
          value="완료"
          className="w-[100px] h-[40px] mt-[40px] bg-green-400 rounded-md cursor-pointer"
        />
      </form>
    </li>
  );
}
