import axios from 'axios';

const api = axios.create({ baseURL: 'https://swapi.dev/api/people/' });

export const fetchPage = async (pageNum: number = 1): Promise<any> => {
  return await api.get('?page=' + pageNum);
};
