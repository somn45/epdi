'use server';

import companyModel from '@/models/Company';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import z from 'zod';

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
