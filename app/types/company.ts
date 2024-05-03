export interface CompanyType {
  name: string;
  image: string;
  isAcquired: boolean;
  authExpiresIn: Date;
  currentProcess: string;
  mainProcess: string[];
  salesAndInfoStartUp: EpdiMainItem;
  collectData: EpdiMainItem;
  applyCertification: EpdiMainItem;
  audit: EpdiMainItem;
  issueCertification: EpdiMainItem;
}

export interface CompanyTypeWithId extends CompanyType {
  _id: string;
}

export interface EpdiMainItem {
  name: string;
  isPass: boolean;
  start?: Date;
  end?: Date;
  subProcess: SubProcess[];
}

export interface SubProcess {
  subName: string;
  isPass: boolean;
  detail: EpdiDetail[];
}

export interface EpdiDetail {
  content: string;
  checked: boolean;
}

/*
export interface ISalesAndInfoStartUp extends EpdiMainItem {
  // 목적 정의
  defPurpose: {
    isPass: boolean;
    start: Date;
    end: Date;
    process: string[];
  };
  // 범위 정의
  defScope: {
    isPass: boolean;
    start: Date;
    end: Date;
    process: string[];
  };
}

export interface ICollectData extends EpdiMainItem {
  // 전과정 목록분석
  analysisListLifeCycle: {
    isPass: boolean;
    start: Date;
    end: Date;
  };
}

export interface IApplyCertification extends EpdiMainItem {
  // 목적 및 범위 정의
  defPurposeAndScope: {
    isPass: boolean;
    start: Date;
    end: Date;
  };
  // 전과정 영향평가
  assessImpactLifeCycle: {
    isPass: boolean;
    start: Date;
    end: Date;
  };
}

export interface IAudit extends EpdiMainItem {
  // 목적 정의
  defPurpose: {
    isPass: boolean;
    start: Date;
    end: Date;
  };
  // 범위 정의
  defScope: {
    isPass: boolean;
    start: Date;
    end: Date;
  };
  // 전과정 목록분석
  analysisListLifeCycle: {
    isPass: boolean;
    start: Date;
    end: Date;
  };
  // 전과정 영향평가
  assessImpactLifeCycle: {
    isPass: boolean;
    start: Date;
    end: Date;
  };
  // 전과정 해석
  translateLifeCycle: {
    isPass: boolean;
    start: Date;
    end: Date;
  };
}

export interface IIssueCertification extends EpdiMainItem {
  // 전과정 영향평가
  assessImpactLifeCycle: {
    isPass: boolean;
    start: Date;
    end: Date;
  };
  // 전과정 해석
  translateLifeCycle: {
    isPass: boolean;
    start: Date;
    end: Date;
  };
}
*/
