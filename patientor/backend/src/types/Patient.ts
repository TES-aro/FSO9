import { isNull, isObject, isString } from './typeUtils.ts';

export const Gender = {
  Male: 'male',
  Female: 'female',
  Other: 'other'
} as const;

export type Gender = typeof Gender[keyof typeof Gender];

export interface Patient {
  id: string,
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: Gender,
  occupation: string
}

export type NonSensitivePatient = Omit<Patient, "ssn">;


const isGender = (val: unknown): val is Gender => {
  if (!isString(val)){return false;}
  return (Object.values(Gender) as string[]).includes(val);
};

const patientKeys = ["id", "name", "dateOfBirth", "ssn", "gender", "occupation"];

const isPatient = (obj: unknown): obj is Patient => {
  if (isNull(obj) || !isObject(obj)){ return false;}
  const keys = Object.keys(obj);
  if (keys.length != patientKeys.length){
    return false;
  }
  for (const key of patientKeys){
    if (!(key in obj)){ return false; }
    const val = (obj as Record<string, unknown>)[key];
    if (!isString(val) && !isGender(val)){ return false; } 
  }
  return true;
};

const isNonSensitivePatient = (obj: unknown): obj is NonSensitivePatient => {
  if(hasId(obj) || !isObject(obj)){
    return false;
  }
  return isPatient( {...obj, ssn: "lorem ipusm"} );
};

const hasId = (obj: unknown): obj is { id: string } =>  {
  
  if(isObject(obj) && !isNull(obj) && 'id' in obj){
    const id = obj.id;
    if (typeof id === 'string' || id instanceof String){
      return true;
    }
  }
  return false;
};

export default { isGender, isPatient, isNonSensitivePatient, patientKeys };
