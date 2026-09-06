import { type Patient, type NonSensitivePatient, Gender } from '../types/Patient.ts';
//import p from '../types/Patient.ts';
import { v1 as uuid } from 'uuid';
import patientData from '../data/patients.ts';
//import { isObject } from '../types/typeUtils.ts';
import { z } from 'zod';

const get = (): Patient[] => {
  console.log('in get patient!');
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

//const parseString = (str: unknown): string => {
//  return z.string().parse(str);
//};
//const parseGender = (str: unknown): Gender => {
//  return z.enum(Gender).parse(str);
//};
//const perror = () => {
//  return new Error('not a proper patient object!');
//};

export type NewPatient = Exclude<Patient, 'id'>;

export const newPatientSchema = z.object({
  name: z.string().min(2, { message: 'field required' }),
  dateOfBirth: z.string().min(2, { message: 'field required' }),
  ssn: z.string().min(2, { message: 'field required' }),
  gender: z.enum(Gender),
  occupation: z.string().min(2, { message: 'field required' }),
});

/*
export const parsePatient = (obj: unknown): NewPatient => {
  if (!isObject(obj)){ throw perror() }
  if ('name' in obj && 'dateOfBirth' in obj && 'ssn' in obj &&
    'gender' in obj && 'occupation' in obj){
    return {
      id: uuid(),
      name: parseString(obj.name),
      dateOfBirth: parseString(obj.dateOfBirth),
      ssn: parseString(obj.ssn),
      gender: parseGender(obj.gender),
      occupation: parseString(obj.occupation)
    }
  }
  throw new Error('Incorrect data: missing some fields')
}
/*
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
*/
const add = (patient: NewPatient): Patient => {
  const newPatient: Patient = { ...patient, id: uuid() };
  patientData.push(newPatient);
  return newPatient;
};
export default { add, get, getNonSensitive };
