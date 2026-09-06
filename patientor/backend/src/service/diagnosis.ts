import diganosisData from '../data/diagnoses.ts';
import type Diagnosis from '../types/Diagnosis.ts';

const get = (): Diagnosis[] => {
  return diganosisData;
};

export default { get };
