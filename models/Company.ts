import mongoose, {
  InferSchemaType,
  Model,
  Schema,
  model,
  models,
} from 'mongoose';

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

interface CompanyModel extends Model<ICompany> {}

mongoose.connect(
  process.env.NEXT_PUBLIC_MONGO_DB_URL
    ? process.env.NEXT_PUBLIC_MONGO_DB_URL
    : ''
);

const companySchema = new Schema<ICompany>({
  name: {
    type: String,
    required: [true, '기업 이름은 필수 요소입니다.'],
  },
  image: String,
  isAcquired: Boolean,
  authExpiresIn: { type: Date },
  currentProcess: String,

  // 영업 및 착수안내
  salesAndInfoStartUp: {
    isPass: Boolean,
    // 목적 정의
    defPurpose: {
      isPass: Boolean,
      start: Date,
      end: Date,
      process: [
        {
          type: String,
          default: [
            '연구 수행이유',
            '연구결과 활용처',
            '연구결과 제출처',
            '비교주장 여부',
          ],
        },
      ],
    },
    // 범위 정의
    defScope: {
      isPass: Boolean,
      start: Date,
      end: Date,
      process: [
        {
          type: String,
          default: [
            '총괄 제품군 검토',
            '제품시스템 정의',
            '기능단위 설정',
            '시스템경계 설정',
            '데이터품질 요건 설정',
            '할당방법 결정',
            '영향평가 방법론 결정',
            '가정 및 제한사항',
            '정밀검토 유형 결정',
            '해석방법 결정',
            '보고서유형 결정',
          ],
        },
      ],
    },
  },
  // 데이터 수집
  collectData: {
    isPass: Boolean,
    // 전과정 목록분석
    analysisListLifeCycle: {
      isPass: Boolean,
      start: Date,
      end: Date,
    },
  },
  applyCertification: {
    isPass: Boolean,
    // 목적 및 범위 정의
    defPurposeAndScope: {
      isPass: Boolean,
      start: Date,
      end: Date,
    },
    // 전과정 영향평가
    assessImpactLifeCycle: {
      isPass: Boolean,
      start: Date,
      end: Date,
    },
  },
  audit: {
    isPass: Boolean,
    // 목적 정의
    defPurpose: {
      isPass: Boolean,
      start: Date,
      end: Date,
    },
    // 범위 정의
    defScope: {
      isPass: Boolean,
      start: Date,
      end: Date,
    },
    // 전과정 목록분석
    analysisListLifeCycle: {
      isPass: Boolean,
      start: Date,
      end: Date,
    },
    // 전과정 영향평가
    assessImpactLifeCycle: {
      isPass: Boolean,
      start: Date,
      end: Date,
    },
    // 전과정 해석
    translateLifeCycle: {
      isPass: Boolean,
      start: Date,
      end: Date,
    },
  },
  issueCertification: {
    isPass: Boolean,
    // 전과정 영향평가
    assessImpactLifeCycle: {
      isPass: Boolean,
      start: Date,
      end: Date,
    },
    // 전과정 해석
    translateLifeCycle: {
      isPass: Boolean,
      start: Date,
      end: Date,
    },
  },
});

const companyModel =
  (models.Company as CompanyModel) ||
  model<ICompany, CompanyModel>('Company', companySchema);

export default companyModel;
