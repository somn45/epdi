import { Schema } from "mongoose";

const companySchema = new Schema({
    name: {
        type: String, 
        required: [true, "기업 이름은 필수 요소입니다."],
    },
    image: String,
    isAcquired: Boolean,
    authExpiresIn: {type: Date},
    workProcess: {
        defProductTypeAndCalCriteria: {
            isPass: {
                type: String,
                enum: ["TODO", "DOING", "DONE"],
            },
            isCheckedNewOrUpdate: Boolean,
            isAnalyzedGuideTargetProduct: Boolean,
            isSetSystemBorder: Boolean,
        },
        researchProductionSite: {
            isPass: {
                type: String,
                enum: ["TODO", "DOING", "DONE"],
            },
            isFigureOutProductProductionProcess: Boolean,
            isFigureOutRawMaterialPartners: Boolean,
            isIdentifiedInputOutput: Boolean,
        },
    }
})