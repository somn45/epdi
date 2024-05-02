interface EpdiMainItemProps {
  content: string;
  onClick: () => void;
}

export default function EpdiMainItem({ content, onClick }: EpdiMainItemProps) {
  return (
    <li onClick={onClick} className="mr-[30px]">
      {content}
    </li>
  );
}
