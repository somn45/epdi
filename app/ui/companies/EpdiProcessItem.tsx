import { EpdiDetail } from "@/app/types/company";
import React, { useState } from "react";
import UpdateDetailContent from "../modal/UpdateDetailContent";
import { deleteEpdiDetailContent } from "@/app/lib/actions";

interface EpdiProcessItemProps {
  companyName: string;
  mainName: string;
  subName: string;
  subId?: string;
  epdiDetail: EpdiDetail;
  detailList: EpdiDetail[];
  isActive: boolean;
  handleChangeCheckList: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EpdiProcessItem({
  companyName,
  mainName,
  subName,
  subId,
  epdiDetail,
  detailList,
  isActive,
  handleChangeCheckList,
}: EpdiProcessItemProps) {
  const [showsUpdateDetailContent, setShowsUpdateDetailContent] =
    useState(false);

  const handleDeleteEpdiDetail = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const newCheckList = detailList.filter((detail) => {
      return detail._id !== epdiDetail._id ? true : false;
    });
    await deleteEpdiDetailContent(companyName, mainName, subName, newCheckList);
  };

  return (
    <li key={epdiDetail._id} className="flex justify-between">
      {showsUpdateDetailContent && (
        <UpdateDetailContent
          key={epdiDetail._id}
          companyName={companyName}
          mainName={mainName}
          subName={subName}
          subId={subId}
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
            epdiDetail.checked ? "line-through" : "no-underline"
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
          onClick={handleDeleteEpdiDetail}
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
