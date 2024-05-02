import { CompanyType } from "@/app/types/company";
import mongoose, {
  InferSchemaType,
  Model,
  Schema,
  model,
  models,
} from "mongoose";

export interface ICompany {
  name: string;
  image: string;
  currentProcess: string;
  isAcquired: boolean;
  authExpiresIn: Date;

  // 영업 및 착수안내
  salesAndInfoStartUp: {
    isPass: boolean;
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
  };
  // 데이터 수집
  collectData: {
    isPass: boolean;
    // 전과정 목록분석
    analysisListLifeCycle: {
      isPass: boolean;
      start: Date;
      end: Date;
    };
  };
  // 인증서 신청
  applyCertification: {
    isPass: boolean;
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
  };
  // 심사
  audit: {
    isPass: boolean;
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
  };
  // 인증서 발행
  issueCertification: {
    isPass: boolean;
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
  };
}

interface CompanyModel extends Model<CompanyType> {}

mongoose.connect(
  process.env.NEXT_PUBLIC_MONGO_DB_URL
    ? process.env.NEXT_PUBLIC_MONGO_DB_URL
    : ""
);

const subProcessSchema = new Schema({
  subName: String,
  isPass: Boolean,
});

const companySchema = new Schema<CompanyType>({
  name: {
    type: String,
    required: [true, "기업 이름은 필수 요소입니다."],
  },
  image: String,
  isAcquired: Boolean,
  authExpiresIn: Date,
  currentProcess: String,
  mainProcess: {
    type: [{ type: String }],
    default: [
      "영업 및 착수 안내",
      "데이터 수집",
      "인증서 신청",
      "심사",
      "인증서 발급",
    ],
  },
  salesAndInfoStartUp: {
    name: String,
    isPass: Boolean,
    start: Date,
    end: Date,
    subProcess: [subProcessSchema],
  },
});

const companyModel =
  (models.Company as CompanyModel) ||
  model<CompanyType, CompanyModel>("Company", companySchema);

export default companyModel;
