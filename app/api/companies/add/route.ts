import companyModel from "@/models/Company";
import { NextRequest, NextResponse } from "next/server";

interface Body {
  name: string;
}

export async function POST(req: NextRequest) {
  const { name }: Body = await req.json();
  await companyModel.create({
    name: name,
    isAcquired: false,
    authExpiresIn: new Date(Date.now()),
    currentProcess: "제품유형 및 계산기준 정의",
    workProcess: {
      defProductTypeAndCalCriteria: {
        isPass: false,
        isCheckedNewOrUpdate: false,
        isAnalyzedGuideTargetProduct: false,
        isSetSystemBorder: false,
      },
      researchProductionSite: {
        isPass: false,
        isFigureOutProductProductionProcess: false,
        isFigureOutRawMaterialPartners: false,
        isIdentifiedInputOutput: false,
      },
    },
  });
  return NextResponse.json({ ok: true });
}
