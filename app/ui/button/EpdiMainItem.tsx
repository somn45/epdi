"use client";

interface EpdiMainItemProps {
  content: string;
  isActive: boolean;
  onClick: () => void;
}

export default function EpdiMainItem({
  content,
  isActive,
  onClick,
}: EpdiMainItemProps) {
  return (
    <li
      onClick={onClick}
      className={`mr-[30px] px-[5px] pb-[20px] cursor-pointer
      ${isActive ? "text-black font-semibold underline" : "text-slate-500"}`}
    >
      {content}
    </li>
  );
}
