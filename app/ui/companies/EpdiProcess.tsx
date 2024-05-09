'use client';

import {
  addEpdiDetail,
  updateCompanyEpdiCheckList,
  updateEpdiDetailContent,
} from '@/app/lib/actions';
import { EpdiDetail } from '@/app/types/company';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import UpdateDetailContent from '../modal/UpdateDetailContent';
import EpdiProcessItem from './EpdiProcessItem';

export interface EpdiProcessProps {
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
  const [epdidetailCheckList, setEpdidetailCheckList] =
    useState<EpdiDetail[]>(detail);
  const [showsUpdateDetailContent, setShowsUpdateDetailContent] =
    useState(false);

  const handleChangeCheckList = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEpdidetailCheckList(
      epdidetailCheckList.map((checkItem) =>
        checkItem._id === e.target.value
          ? {
              content: checkItem.content,
              checked: !checkItem.checked,
              _id: checkItem._id,
            }
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
      <form action={addEpdiDetail} className="mb-[30px]">
        <input type="text" name="content" />
        <input
          type="text"
          name="name"
          value={companyName}
          onChange={() => {}}
          hidden
        />
        <input
          type="text"
          name="mainItem"
          value={mainName}
          onChange={() => {}}
          hidden
        />
        <input
          type="text"
          name="subName"
          value={subName}
          onChange={() => {}}
          hidden
        />
        <input type="submit" value="세부사항 추가" onChange={() => {}} />
      </form>
      <form action={updateCompanyEpdiDetail}>
        <ul>
          {epdidetailCheckList.map((epdiDetail) => (
            <EpdiProcessItem
              key={epdiDetail._id}
              companyName={companyName}
              mainName={mainName}
              subName={subName}
              epdiDetail={epdiDetail}
              detailList={epdidetailCheckList}
              isActive={isActive}
              handleChangeCheckList={handleChangeCheckList}
            />
          ))}
        </ul>
        <input
          type="submit"
          value="완료"
          onChange={() => {}}
          className="w-[100px] h-[40px] mt-[40px] bg-green-400 rounded-md cursor-pointer
          hover:bg-green-600"
        />
      </form>
    </li>
  );
}
