import Company from "./Company";

export interface Company {
  name: string;
  workProcess: string;
  defProductTypeAndCalCriteria: boolean;
  researchProductionSite: boolean;
}

export const companies = [
  {
    name: "사성전자",
    workProcess: "생산현장 조사",
    defProductTypeAndCalCriteria: true,
    researchProductionSite: true,
  },
  {
    name: "사성전자",
    workProcess: "생산현장 조사",
    defProductTypeAndCalCriteria: true,
    researchProductionSite: true,
  },
  {
    name: "사성전자",
    workProcess: "생산현장 조사",
    defProductTypeAndCalCriteria: true,
    researchProductionSite: true,
  },
  {
    name: "사성전자",
    workProcess: "생산현장 조사",
    defProductTypeAndCalCriteria: true,
    researchProductionSite: true,
  },
];

export default function CompanyList() {
  return (
    <div>
      <ul>
        {companies.map((company) => (
          <Company company={company} />
        ))}
      </ul>
    </div>
  );
}
