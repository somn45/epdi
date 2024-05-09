import { EpdiDetail } from '@/app/types/company';
import { useState } from 'react';
import UpdateDetailContent from '../modal/UpdateDetailContent';

interface EpdiProcessItemProps {
  companyName: string;
  mainName: string;
  subName: string;
  epdiDetail: EpdiDetail;
  detailList: EpdiDetail[];
  isActive: boolean;
  handleChangeCheckList: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EpdiProcessItem({
  companyName,
  mainName,
  subName,
  epdiDetail,
  detailList,
  isActive,
  handleChangeCheckList,
}: EpdiProcessItemProps) {
  const [showsUpdateDetailContent, setShowsUpdateDetailContent] =
    useState(false);

  return (
    <li key={epdiDetail._id} className="flex justify-between">
      {showsUpdateDetailContent && (
        <UpdateDetailContent
          key={epdiDetail._id}
          companyName={companyName}
          mainName={mainName}
          subName={subName}
          detail={detailList}
          content={epdiDetail}
          closeModal={() => setShowsUpdateDetailContent(false)}
        />
      )}
      <div>
        <input
          type="checkbox"
          id={epdiDetail.content}
          name={epdiDetail.content}
          value={epdiDetail._id}
          checked={epdiDetail.checked}
          onChange={handleChangeCheckList}
          disabled={!isActive}
          className="mr-[5px] cursor-pointer"
        />
        <label
          htmlFor={epdiDetail.content}
          className={`cursor-pointer ${
            epdiDetail.checked ? 'line-through' : 'no-underline'
          }`}
        >
          {epdiDetail.content}
        </label>
      </div>
      <div className="flex">
        <button
          disabled={!isActive}
          onClick={() => setShowsUpdateDetailContent(true)}
          className="px-[5px] cursor-pointer
      hover:scale-125 focus:scale-125"
        >
          🖋️
        </button>
        <button
          disabled={!isActive}
          className="px-[5px] cursor-pointer
      hover:scale-125 focus:scale-125"
        >
          ❌
        </button>
      </div>
    </li>
  );
}
