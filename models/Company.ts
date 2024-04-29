import mongoose, { InferSchemaType, Schema, model, models } from "mongoose";

export interface ICompany {
  name: string;
  image: string;
  currentProcess: string;
  isAcquired: boolean;
  authExpiresIn: {
    type: Date;
  };
  workProcess: {
    defProductTypeAndCalCriteria: {
      isPass: boolean;
    };
    researchProductionSite: {
      isPass: boolean;
    };
  };
}

mongoose.connect(
  process.env.NEXT_PUBLIC_MONGO_DB_URL
    ? process.env.NEXT_PUBLIC_MONGO_DB_URL
    : ""
);

const companySchema = new Schema<ICompany>({
  name: {
    type: String,
    required: [true, "기업 이름은 필수 요소입니다."],
  },
  image: String,
  isAcquired: Boolean,
  authExpiresIn: { type: Date },
  currentProcess: String,
  workProcess: {
    defProductTypeAndCalCriteria: {
      isPass: Boolean,
      isCheckedNewOrUpdate: Boolean,
      isAnalyzedGuideTargetProduct: Boolean,
      isSetSystemBorder: Boolean,
    },
    researchProductionSite: {
      isPass: Boolean,
      isFigureOutProductProductionProcess: Boolean,
      isFigureOutRawMaterialPartners: Boolean,
      isIdentifiedInputOutput: Boolean,
    },
  },
});

const companyModel = models.Company || model("Company", companySchema);

export default companyModel;
