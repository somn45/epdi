'use server';

import companyModel from '@/models/Company';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import z from 'zod';
import { DEFAULT_EPDI_COMPANY } from '../util/constants';
import { EpdiDetail, EpdiMainItem } from '../types/company';

const addCompanyFormSchema = z.object({
  name: z.string(),
  authExpiresIn: z.string(),
});

const AddCompany = addCompanyFormSchema;

export const addCompany = async (formData: FormData) => {
  const { name, authExpiresIn } = AddCompany.parse({
    name: formData.get('name'),
    authExpiresIn: formData.get('authExpiresIn'),
  });

  await companyModel.create({
    ...DEFAULT_EPDI_COMPANY,
    name,
    authExpiresIn: new Date(authExpiresIn),
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

    if (company && mainItem === '영업 및 착수 안내') {
      // 3차 단계 체크 리스트 업데이트
      company.salesAndInfoStartUp.subProcess =
        company.salesAndInfoStartUp.subProcess.map((sub) => {
          return sub.subName === subItem
            ? { ...sub, detail: checklist }
            : { ...sub };
        });

      // 3차 작업 체크 리스트가 모드 체크일때 2차 작업의 pass 여부 변경
      const allCheckedEpdiDetailProcesses = checklist.every(
        (detail) => detail.checked
      );
      company.salesAndInfoStartUp.subProcess =
        company.salesAndInfoStartUp.subProcess.map((sub) => {
          return sub.subName === subItem
            ? { ...sub, isPass: allCheckedEpdiDetailProcesses }
            : { ...sub };
        });

      // 2차 작업 체크 리스트가 모두 체크일때 메인 작업의 pass 여부 변경
      const allCheckedEpdiSubProcesses =
        company.salesAndInfoStartUp.subProcess.every((sub) => sub.isPass);

      if (allCheckedEpdiSubProcesses) {
        company.salesAndInfoStartUp.isPass = true;
        company.currentProcess =
          company.mainProcess[
            company.mainProcess.indexOf('영업 및 착수 안내') + 1
          ];
        company.salesAndInfoStartUp.end = new Date(
          Date.now() + 1000 * 60 * 60 * 9
        );
        company.collectData.start = new Date(Date.now() + 1000 * 60 * 60 * 9);
      }
    }

    if (company && mainItem === '데이터 수집') {
      // 3차 단계 체크 리스트 업데이트
      company.collectData.subProcess = company.collectData.subProcess.map(
        (sub) => {
          return sub.subName === subItem
            ? { ...sub, detail: checklist }
            : { ...sub };
        }
      );

      // 3차 작업 체크 리스트가 모드 체크일때 2차 작업의 pass 여부 변경
      const allCheckedEpdiDetailProcesses = checklist.every(
        (detail) => detail.checked
      );
      company.collectData.subProcess = company.collectData.subProcess.map(
        (sub) => {
          return sub.subName === subItem
            ? { ...sub, isPass: allCheckedEpdiDetailProcesses }
            : { ...sub };
        }
      );

      // 2차 작업 체크 리스트가 모두 체크일때 메인 작업의 pass 여부 변경
      const allCheckedEpdiSubProcesses = company.collectData.subProcess.every(
        (sub) => sub.isPass
      );

      if (allCheckedEpdiSubProcesses) {
        company.collectData.isPass = true;
        company.currentProcess =
          company.mainProcess[company.mainProcess.indexOf('데이터 수집') + 1];
        company.collectData.end = new Date(Date.now() + 1000 * 60 * 60 * 9);
        company.applyCertification.start = new Date(
          Date.now() + 1000 * 60 * 60 * 9
        );
      }
    }

    if (company && mainItem === '인증서 신청') {
      // 3차 단계 체크 리스트 업데이트
      company.applyCertification.subProcess =
        company.applyCertification.subProcess.map((sub) => {
          return sub.subName === subItem
            ? { ...sub, detail: checklist }
            : { ...sub };
        });

      // 3차 작업 체크 리스트가 모드 체크일때 2차 작업의 pass 여부 변경
      const allCheckedEpdiDetailProcesses = checklist.every(
        (detail) => detail.checked
      );
      company.applyCertification.subProcess =
        company.applyCertification.subProcess.map((sub) => {
          return sub.subName === subItem
            ? { ...sub, isPass: allCheckedEpdiDetailProcesses }
            : { ...sub };
        });

      // 2차 작업 체크 리스트가 모두 체크일때 메인 작업의 pass 여부 변경
      const allCheckedEpdiSubProcesses =
        company.applyCertification.subProcess.every((sub) => sub.isPass);

      if (allCheckedEpdiSubProcesses) {
        company.applyCertification.isPass = true;
        company.currentProcess =
          company.mainProcess[company.mainProcess.indexOf('인증서 신청') + 1];
        company.applyCertification.end = new Date(
          Date.now() + 1000 * 60 * 60 * 9
        );
        company.audit.start = new Date(Date.now() + 1000 * 60 * 60 * 9);
      }
    }

    if (company && mainItem === '심사') {
      // 3차 단계 체크 리스트 업데이트
      company.audit.subProcess = company.audit.subProcess.map((sub) => {
        return sub.subName === subItem
          ? { ...sub, detail: checklist }
          : { ...sub };
      });

      // 3차 작업 체크 리스트가 모드 체크일때 2차 작업의 pass 여부 변경
      const allCheckedEpdiDetailProcesses = checklist.every(
        (detail) => detail.checked
      );
      company.audit.subProcess = company.audit.subProcess.map((sub) => {
        return sub.subName === subItem
          ? { ...sub, isPass: allCheckedEpdiDetailProcesses }
          : { ...sub };
      });

      // 2차 작업 체크 리스트가 모두 체크일때 메인 작업의 pass 여부 변경
      const allCheckedEpdiSubProcesses = company.audit.subProcess.every(
        (sub) => sub.isPass
      );

      if (allCheckedEpdiSubProcesses) {
        company.audit.isPass = true;
        company.currentProcess =
          company.mainProcess[company.mainProcess.indexOf('심사') + 1];
        company.audit.end = new Date(Date.now() + 1000 * 60 * 60 * 9);
        company.issueCertification.start = new Date(
          Date.now() + 1000 * 60 * 60 * 9
        );
      }
    }

    if (company && mainItem === '인증서 발급') {
      // 3차 단계 체크 리스트 업데이트
      company.issueCertification.subProcess =
        company.issueCertification.subProcess.map((sub) => {
          return sub.subName === subItem
            ? { ...sub, detail: checklist }
            : { ...sub };
        });

      // 3차 작업 체크 리스트가 모드 체크일때 2차 작업의 pass 여부 변경
      const allCheckedEpdiDetailProcesses = checklist.every(
        (detail) => detail.checked
      );
      company.issueCertification.subProcess =
        company.issueCertification.subProcess.map((sub) => {
          return sub.subName === subItem
            ? { ...sub, isPass: allCheckedEpdiDetailProcesses }
            : { ...sub };
        });

      // 2차 작업 체크 리스트가 모두 체크일때 메인 작업의 pass 여부 변경
      const allCheckedEpdiSubProcesses =
        company.issueCertification.subProcess.every((sub) => sub.isPass);

      if (allCheckedEpdiSubProcesses) {
        company.issueCertification.isPass = true;
        company.issueCertification.end = new Date(
          Date.now() + 1000 * 60 * 60 * 9
        );
        company.isAcquired = true;
        company.authExpiresIn = new Date(
          Date.now() + 1000 * 60 * 60 * 24 * 365 * 3
        );
      }
    }

    await company?.save();

    revalidatePath(`/companies/${companyName}`);
  } catch (error) {
    console.error(error);
  }
};

const addEpdiDetailSchema = z.object({
  name: z.string(),
  mainItem: z.string(),
  subName: z.string(),
  content: z.string(),
});

const addEpdiDetailForm = addEpdiDetailSchema;

export const addEpdiDetail = async (formData: FormData) => {
  const { name, mainItem, subName, content } = addEpdiDetailForm.parse({
    name: formData.get('name'),
    mainItem: formData.get('mainItem'),
    subName: formData.get('subName'),
    content: formData.get('content'),
  });

  const company = await companyModel.findOne({ name });

  if (company && mainItem === '영업 및 착수 안내') {
    company.salesAndInfoStartUp.subProcess =
      company?.salesAndInfoStartUp.subProcess.map((sub) =>
        sub.subName === subName
          ? { ...sub, detail: [...sub.detail, { content, checked: false }] }
          : { ...sub }
      );
  }
  if (company && mainItem === '데이터 수집') {
    company.collectData.subProcess = company?.collectData.subProcess.map(
      (sub) =>
        sub.subName === subName
          ? { ...sub, detail: [...sub.detail, { content, checked: false }] }
          : { ...sub }
    );
  }
  if (company && mainItem === '인증서 신청') {
    company.applyCertification.subProcess =
      company?.applyCertification.subProcess.map((sub) =>
        sub.subName === subName
          ? { ...sub, detail: [...sub.detail, { content, checked: false }] }
          : { ...sub }
      );
  }
  if (company && mainItem === '심사') {
    company.audit.subProcess = company?.audit.subProcess.map((sub) =>
      sub.subName === subName
        ? { ...sub, detail: [...sub.detail, { content, checked: false }] }
        : { ...sub }
    );
  }
  if (company && mainItem === '인증서 발급') {
    company.issueCertification.subProcess =
      company?.issueCertification.subProcess.map((sub) =>
        sub.subName === subName
          ? { ...sub, detail: [...sub.detail, { content, checked: false }] }
          : { ...sub }
      );
  }

  await company?.save();

  revalidatePath(`/companies/${name}`);
};
