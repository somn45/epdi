"use server";

import companyModel from "@/models/Company";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";
import { DEFAULT_EPDI_COMPANY } from "../util/constants";
import { EpdiDetail } from "../types/company";

const addCompanyFormSchema = z.object({
  name: z.string(),
});

const AddCompany = addCompanyFormSchema;

export const addCompany = async (formData: FormData) => {
  const { name } = AddCompany.parse({
    name: formData.get("name"),
  });

  await companyModel.create({
    ...DEFAULT_EPDI_COMPANY,
    name,
  });

  revalidatePath("/search");
  redirect("/search");
};

const searchFormSchema = z.object({
  keyword: z.string(),
});

const SearchForm = searchFormSchema;

export const searchCompanies = async (formData: FormData) => {
  const { keyword } = SearchForm.parse({
    keyword: formData.get("keyword"),
  });

  const encodedKeyword = encodeURI(keyword);
  redirect(`/search?keyword=${encodedKeyword}`);
};

export const updateCompanyEpdiCheckList = async (
  companyName: string,
  mainItem: string,
  subItem: string,
  checklist: EpdiDetail[]
) => {
  const company = await companyModel.findOne({ name: companyName });

  if (company)
    company.salesAndInfoStartUp.subProcess =
      company.salesAndInfoStartUp.subProcess.map((sub) => {
        return sub.subName === subItem
          ? { ...sub, detail: checklist }
          : { ...sub };
      });

  await company?.save();

  revalidatePath(`/companies/${companyName}`);
};
