'use server';

import companyModel from '@/models/Company';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import z from 'zod';

const addCompanyFormSchema = z.object({
  name: z.string(),
});

const AddCompany = addCompanyFormSchema;

export const addCompany = async (formData: FormData) => {
  const { name } = AddCompany.parse({
    name: formData.get('name'),
  });

  await companyModel.create({
    name,
    image: '',
    currentProcess: '영업 및 착수안내',
    isAcquired: false,
    salesAndInfoStartUp: {
      isPass: false,
      defPurpose: {
        isPass: false,
        start: new Date(Date.now() + 1000 * 60 * 60 * 9),
        process: [],
      },
      defScope: {
        isPass: false,
        process: [],
      },
    },
    collectData: {
      isPass: false,
      analysisListLifeCycle: {
        isPass: false,
      },
    },
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
