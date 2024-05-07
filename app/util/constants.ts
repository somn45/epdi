export const DEFAULT_EPDI_COMPANY = {
  image: "",
  currentProcess: "영업 및 착수 안내",
  isAcquired: false,
  mainProcess: [
    "영업 및 착수 안내",
    "데이터 수집",
    "인증서 신청",
    "심사",
    "인증서 발급",
  ],
  salesAndInfoStartUp: {
    name: "영업 및 착수 안내",
    isPass: false,
    start: new Date(Date.now() + 1000 * 60 * 60 * 9),
    subProcess: [
      {
        subName: "목적 정의",
        isPass: false,
        detail: [
          {
            content: "연구 수행이유",
            checked: false,
          },
          {
            content: "연구결과 활용처",
            checked: false,
          },
          {
            content: "연구결과 제출처",
            checked: false,
          },
          {
            content: "비교주장 여부",
            checked: false,
          },
        ],
      },
      {
        subName: "범위 정의",
        isPass: false,
        detail: [
          {
            content: "통합 제품군 검토",
            checkewd: false,
          },
          {
            content: "제품시스템 정의",
            checkewd: false,
          },
          {
            content: "기능단위 설정",
            checkewd: false,
          },
          {
            content: "시스템경계 설정",
            checkewd: false,
          },
          {
            content: "데이터품질 요건",
            checkewd: false,
          },
          {
            content: "할당방법 결정",
            checkewd: false,
          },
          {
            content: "영향평가 방법론 결정",
            checkewd: false,
          },
          {
            content: "가정 및 제한사항",
            checkewd: false,
          },
          {
            content: "정밀검토 유형 결정",
            checkewd: false,
          },
          {
            content: "해석방법 결정",
            checkewd: false,
          },
          {
            content: "보고서유형 결정",
            checkewd: false,
          },
        ],
      },
    ],
  },
  collectData: {
    name: "데이터 수집",
    isPass: false,
    subProcess: [
      {
        subName: "데이터 수집1",
        isPass: false,
        detail: [
          {
            content: "활동1",
            checked: false,
          },
          {
            content: "활동2",
            checked: false,
          },
          {
            content: "활동3",
            checked: false,
          },
        ],
      },
    ],
  },
  applyCertification: {
    name: "인증서 신청",
    isPass: false,
    subProcess: [
      {
        subName: "인증서 신청1",
        isPass: false,
        detail: [
          {
            content: "활동1",
            checked: false,
          },
          {
            content: "활동2",
            checked: false,
          },
          {
            content: "활동3",
            checked: false,
          },
        ],
      },
      {
        subName: "인증서 신청2",
        isPass: false,
        detail: [
          {
            content: "활동1",
            checked: false,
          },
          {
            content: "활동2",
            checked: false,
          },
          {
            content: "활동3",
            checked: false,
          },
        ],
      },
    ],
  },
  audit: {
    name: "심사",
    isPass: false,
    subProcess: [
      {
        subName: "심사1",
        isPass: false,
        detail: [
          {
            content: "활동1",
            checked: false,
          },
          {
            content: "활동2",
            checked: false,
          },
          {
            content: "활동3",
            checked: false,
          },
        ],
      },
    ],
  },
  issueCertification: {
    name: "인증서 발급",
    isPass: false,
    subProcess: [
      {
        subName: "인증서 발급1",
        isPass: false,
        detail: [
          {
            content: "활동1",
            checked: false,
          },
          {
            content: "활동2",
            checked: false,
          },
          {
            content: "활동3",
            checked: false,
          },
        ],
      },
    ],
  },
};
