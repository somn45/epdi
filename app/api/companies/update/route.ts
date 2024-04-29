import companyModel, { ICompany } from "@/models/Company";
import { findSourceMap } from "module";
import { NextRequest, NextResponse } from "next/server";

interface Body {
  name: string;
  targetProgress: string;
  isFinish: boolean;
}

export async function POST(req: NextRequest) {
  const { name, targetProgress, isFinish }: Body = await req.json();
  const company = await companyModel.findOne({ name });
  await companyModel.findOneAndUpdate(
    { name },
    {
      workProcess: {
        ...company.workProcess,
        [targetProgress]: {
          isPass: isFinish,
        },
      },
    }
  );

  const updatedCompany = await companyModel.findOne({ name });
  console.log(updatedCompany);
  return NextResponse.json({});
}
