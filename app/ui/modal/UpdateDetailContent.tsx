import { useEffect, useRef, useState } from 'react';
import { EpdiProcessProps } from '../companies/EpdiProcess';
import { updateEpdiDetailContent } from '@/app/lib/actions';
import { EpdiDetail } from '@/app/types/company';

interface Modal extends Omit<EpdiProcessProps, 'isActive'> {
  content: EpdiDetail;
  closeModal: () => void;
}

export default function UpdateDetailContent({
  companyName,
  mainName,
  subName,
  detail,
  content,
  closeModal,
}: Modal) {
  const updateDetailContentRef = useRef<HTMLDivElement>(null);
  const [newContent, setNewContent] = useState(content.content);

  console.log(content, content.content);

  const handleUpdateContent = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const newCheckList = detail.map((detail) => {
      return detail._id === content._id
        ? { ...detail, content: newContent }
        : { ...detail };
    });
    console.log(newCheckList);
    await updateEpdiDetailContent(companyName, mainName, subName, detail);
  };

  return (
    <div
      className="w-full h-screen bg-slate-300/50
    flex justify-center items-center fixed left-0 top-0"
    >
      <div
        ref={updateDetailContentRef}
        className="w-[480px] h-[140px] bg-white flex justify-center items-center relative"
      >
        <button
          onClick={() => closeModal()}
          className="absolute top-[10px] right-[10px]"
        >
          X
        </button>
        <input
          type="text"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="세부사항 내용"
          className="w-[300px] h-[40px] shadow-md shadow-slate-300"
        />
        <button
          onClick={handleUpdateContent}
          className="w-[100px] h-[40px] bg-green-400 rounded-md
          text-[14px] text-slate-200 cursor-pointer"
        >
          세부사항 수정
        </button>
      </div>
    </div>
  );
}
