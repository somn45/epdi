import companyModel, { ICompany } from "@/models/Company";
import { findSourceMap } from "module";
import { NextRequest, NextResponse } from "next/server";

interface Body {
  name: string;
  defProductTypeAndCalCriteria: boolean;
}

export async function POST(req: NextRequest) {
  const { name, defProductTypeAndCalCriteria }: Body = await req.json();
  await companyModel.findOneAndUpdate(
    { name },
    {
      workProcess: {
        defProductTypeAndCalCriteria: {
          isPass: defProductTypeAndCalCriteria,
        },
      },
    }
  );
  return NextResponse.json({});
}
