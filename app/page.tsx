import Link from "next/link";
import { fetchCompaniesOrderByLatest } from "./lib/data";
import { Suspense } from "react";
import HomeCompany from "./ui/companies/HomeCompany";

export default async function Home() {
  const companiesOrderByLatest = await fetchCompaniesOrderByLatest();
  return (
    <div className="wrapper flex flex-col">
      <div className="pt-[60px] pl-[120px]">
        <h1 className="text-[1.5rem] font-semibold">
          그리너스 환경성적표지 인증 관리 페이지입니다.
        </h1>
        <div className="mt-[20px] flex">
          <h5 className="text-[20px] font-semibold">
            환경성적표지인증 진행 기업 목록으로 이동
          </h5>
          <Link href="/search" className="text-[20px]">
            ➡️
          </Link>
        </div>
        <div className="mt-[20px] flex">
          <h5 className="text-[20px] font-semibold">
            인증 만료 기업 목록으로 이동
          </h5>
          <Link href="/calendar" className="text-[20px]">
            ➡️
          </Link>
        </div>
        <Suspense>
          <ul className="w-[1300px] grid gap-[30px] grid-cols-3">
            {companiesOrderByLatest.map((company) => (
              <HomeCompany company={company} />
            ))}
          </ul>
        </Suspense>
      </div>
    </div>
  );
}
