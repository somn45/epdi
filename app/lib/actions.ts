'use server';

import companyModel from '@/models/Company';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import z from 'zod';
import { DEFAULT_EPDI_COMPANY } from '../util/constants';
import { EpdiDetail, EpdiMainItem } from '../types/company';

const addCompanyFormSchema = z.object({
  name: z.string(),
});

const AddCompany = addCompanyFormSchema;

export const addCompany = async (formData: FormData) => {
  const { name } = AddCompany.parse({
    name: formData.get('name'),
  });

  await companyModel.create({
    ...DEFAULT_EPDI_COMPANY,
    name,
  });

  revalidatePath('/search');
  redirect('/search');
};

const searchFormSchema = z.object({
  keyword: z.string(),
});

const SearchForm = searchFormSchema;

export const searchCompanies = async (formData: FormData) => {
  const { keyword } = SearchForm.parse({
    keyword: formData.get('keyword'),
  });

  const encodedKeyword = encodeURI(keyword);
  redirect(`/search?keyword=${encodedKeyword}`);
};

// Map 객체를 이용해 리펙토링 예정
export const updateCompanyEpdiCheckList = async (
  companyName: string,
  mainItem: string,
  subItem: string,
  checklist: EpdiDetail[]
) => {
  try {
    const company = await companyModel.findOne({ name: companyName });

    if (company) {
      const checkedAllEpdiDetails = checklist.every((detail) => detail.checked);

      const updateMainItem = new Map([
        [
          'salesAndInfoStartUp',
          () =>
            (company.salesAndInfoStartUp.subProcess =
              company.salesAndInfoStartUp.subProcess.map((sub) => {
                return sub.subName === subItem
                  ? { ...sub, detail: checklist }
                  : { ...sub };
              })),
        ],
      ]);

      const updateSubProcessPassed = new Map([
        [
          'salesAndInfoStartUp',
          (company.salesAndInfoStartUp.subProcess =
            company.salesAndInfoStartUp.subProcess.map((sub) => {
              return sub.subName === subItem
                ? { ...sub, isPass: true }
                : { ...sub };
            })),
        ],
      ]);

      const update = updateMainItem.get(mainItem);
      update && update();
      if (checkedAllEpdiDetails) updateSubProcessPassed.get(mainItem);

      await company?.save();

      const updateMainProcessPassed = new Map([
        [
          'salesAndInfoStartUp',
          (company.salesAndInfoStartUp.isPass =
            company.salesAndInfoStartUp.subProcess.every((sub) => sub.isPass)),
        ],
      ]);

      updateMainProcessPassed.get(mainItem);

      await company.save();

      if (
        mainItem === 'salesAndInfoStartUp' &&
        company.salesAndInfoStartUp.isPass
      ) {
        const currentMainProcessIndex = company.mainProcess.indexOf(
          company.currentProcess
        );
        company.currentProcess =
          company.mainProcess[currentMainProcessIndex + 1];
        await company.save();
      }
    }

    revalidatePath(`/companies/${companyName}`);
  } catch (error) {
    console.error(error);
  }
};
