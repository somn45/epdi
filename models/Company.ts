import { CompanyType, EpdiDetail, SubProcess } from '@/app/types/company';
import mongoose, {
  InferSchemaType,
  Model,
  Schema,
  Types,
  model,
  models,
} from 'mongoose';

interface DBCompany extends CompanyType {
  _id: mongoose.Types.ObjectId;
}

interface CompanyModel extends Model<DBCompany> {}

interface DBSubProcess extends Omit<SubProcess, '_id'> {
  _id?: mongoose.Types.ObjectId;
}

interface DBDetailProcess extends Omit<EpdiDetail, '_id'> {
  _id?: mongoose.Types.ObjectId;
}

mongoose.connect(
  process.env.NEXT_PUBLIC_MONGO_DB_URL
    ? process.env.NEXT_PUBLIC_MONGO_DB_URL
    : ''
);

const detailProcessSchema = new Schema<DBDetailProcess>({
  content: String,
  checked: Boolean,
});

const subProcessSchema = new Schema<DBSubProcess>({
  subName: String,
  isPass: Boolean,
  detail: [detailProcessSchema],
});

const companySchema = new Schema<DBCompany>({
  name: {
    type: String,
    required: [true, '기업 이름은 필수 요소입니다.'],
  },
  image: String,
  isAcquired: Boolean,
  authExpiresIn: Date,
  currentProcess: String,
  mainProcess: [String],
  salesAndInfoStartUp: {
    name: String,
    value: String,
    isPass: Boolean,
    start: Date,
    end: Date,
    subProcess: [subProcessSchema],
  },
  collectData: {
    name: String,
    isPass: Boolean,
    start: Date,
    end: Date,
    subProcess: [subProcessSchema],
  },
  applyCertification: {
    name: String,
    isPass: Boolean,
    start: Date,
    end: Date,
    subProcess: [subProcessSchema],
  },
  audit: {
    name: String,
    isPass: Boolean,
    start: Date,
    end: Date,
    subProcess: [subProcessSchema],
  },
  issueCertification: {
    name: String,
    isPass: Boolean,
    start: Date,
    end: Date,
    subProcess: [subProcessSchema],
  },
});

const companyModel =
  (models.Company as CompanyModel) ||
  model<DBCompany, CompanyModel>('Company', companySchema);

export default companyModel;
