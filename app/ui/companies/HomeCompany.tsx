import { CompanyType } from "@/app/types/company";
import Link from "next/link";

export default function HomeCompany({
  company: {
    name,
    image,
    currentProcess,
    salesAndInfoStartUp: { start },
  },
}: {
  company: CompanyType;
}) {
  return (
    <Link href={`/companies/${name}`}>
      <li
        key={name}
        className="w-[400px] h-[160px] p-[10px] shadow-md flex items-center
        hover:scale-110 duration-75 ease-out
        "
      >
        {image ? (
          <img src="company.image" alt="company.name" />
        ) : (
          <div
            className="w-[120px] h-[120px] bg-slate-400
        flex justify-center items-center"
          >
            <h5 className="text-[14px] text-white font-semibold">🛠️ Images</h5>
          </div>
        )}
        <div className="ml-[10px] flex flex-col">
          <h2 className="text-[18px] font-semibold text-green-900">{name}</h2>
          {start && (
            <>
              <p className="text-[14px] font-semibold text-slate-700">
                인증 시작일자 :{" "}
              </p>
              <p className="text-[14px] text-slate-600">{`${start?.getFullYear()}년 ${
                start?.getMonth() + 1
              }월 ${start?.getDate()}일 ${start.getHours()}시 ${start.getMinutes()}분`}</p>
            </>
          )}
          <p className="text-[14px]">현재 인증 과정: {currentProcess}</p>
        </div>
      </li>
    </Link>
  );
}
