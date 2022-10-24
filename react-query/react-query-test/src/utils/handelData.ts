import { fetchPage } from './axios';

export const appendPage = async (pageNum: number) => {
  return await fetchPage(pageNum);
};
