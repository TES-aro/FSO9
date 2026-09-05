import { type Patient, type NonSensitivePatient } from '../types/Patient.ts';
import p from '../types/Patient.ts';
import { v1 as uuid } from 'uuid';
import patientData from '../data/patients.ts';
import { isObject } from '../types/typeUtils.ts';

const get = (): Patient[] => {
  return patientData;
};

const getNonSensitive = (): NonSensitivePatient[] => {
  return patientData.map(p => {
    return {
      id:p.id,
      name: p.name,
      dateOfBirth: p.dateOfBirth,
      gender: p.gender,
      occupation: p.occupation
    };
  });
};

const perror = () => {
  return new Error('not a proper patient object!');
};

const parsePatient = (obj: unknown) => {
  try{
    if (!isObject(obj)){
      throw new Error();
    }
    const patient: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)){
      if (p.patientKeys.includes(key)){
        patient[key] = value;
      }
    }
    patient.id = uuid();
    if(p.isPatient(patient)){
      return patient as Patient;
    }
    throw new Error();
  } catch {
    throw perror();
  }
};
const add = (obj: unknown) => {
  try{
    const patient = parsePatient(obj);
    patientData.push(patient);
    return patientData[0];
  } catch {
    throw perror();
  }
};
export default { add, get, getNonSensitive };
