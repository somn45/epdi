import Link from "next/link";

export default function ComapanyListHeader() {
    return <li className="w-[700px] h-[20px] mb-[20px] flex">
        <h2 className="w-[120px] text-center">
     기업명
        </h2>
        <h5 className="w-[180px] text-center">진행 현황</h5>
        <p className="w-[250px] text-center">제품유형 및 계산기준 정의</p>
        <p className="w-[150px] text-center">생산현장 조사</p>
    </li>
}