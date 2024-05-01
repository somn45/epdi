import { ICompany } from '@/models/Company';
import EpdiMainItem from '../ui/button/EpdiMainItem';

export default function Detail({ company }: { company: ICompany | null }) {
  return (
    <div className="wrapper flex flex-col items-center">
      <div className="h-[150px] mt-[30px] flex-col items-center">
        <h1 className="text-[24px] font-semibold">
          기업 환경성적표지인증 상세 정보
        </h1>
        <h2 className="text-[20px] text-slate-600">
          {decodeURI(company!.name)}
        </h2>

        <ul className="w-[1000px] mt-[40px] flex items-center">
          <EpdiMainItem content="영업 및 착수 안내" />
          <EpdiMainItem content="데이터 수집" />
          <EpdiMainItem content="인증서 신청" />
          <EpdiMainItem content="심사" />
          <EpdiMainItem content="인증서 발행" />
        </ul>
      </div>

      <div className="w-[1000px]">
        <div className="w-[300px] flex flex-col"></div>
      </div>
    </div>
  );
}
