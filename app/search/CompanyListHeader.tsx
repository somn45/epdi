import Link from "next/link";

export default function ComapanyListHeader() {
  return (
    <li className="w-[1200px] h-[30px] text-[16px] text-slate-500 flex">
      <h2 className="w-[150px] text-center">기업명</h2>
      <h5 className="w-[250px] text-center">진행 현황</h5>
      <p className="w-[250px] text-center">영업 및 착수 안내</p>
      <p className="w-[150px] text-center">데이터 수집</p>
      <p className="w-[150px] text-center">인증 신청</p>
      <p className="w-[100px] text-center">심사</p>
      <p className="w-[150px] text-center">인증서 발급</p>
    </li>
  );
}
