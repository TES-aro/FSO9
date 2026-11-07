import axios from 'axios';
import { type DiaryEntry } from '../types.ts';

const baseURL = 'http://localhost:3000'

const getAll = async () => {
  const { data } = await axios.get<DiaryEntry[]>(`${baseURL}/api/diaries`);

  return data;
};

export default { getAll }
