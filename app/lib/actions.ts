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
    mainProcess: [
      '영업 및 착수 안내',
      '데이터 수집',
      '인증서 신청',
      '심사',
      '인증서 발급',
    ],
    salesAndInfoStartUp: {
      name: '영업 및 착수안내',
      isPass: false,
      start: new Date(Date.now() + 1000 * 60 * 60 * 9),
      subProcess: [
        {
          subName: '목적 정의',
          isPass: false,
          detail: [
            {
              content: '정의 테스트',
              checked: false,
            },
            {
              content: '연구결과 테스트',
              checked: false,
            },
          ],
        },
        {
          subName: '범위 정의',
          isPass: false,
        },
      ],
    },
  });
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
