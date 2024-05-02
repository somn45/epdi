import { EpdiMainItem } from '@/app/types/company';

export default function EpdiSubList({ mainItem }: { mainItem?: EpdiMainItem }) {
  return (
    <div>
      <h1>{mainItem?.name}</h1>
      <ul>
        {mainItem?.subProcess.map((sub) => (
          <li>{sub.subName}</li>
        ))}
      </ul>
    </div>
  );
}