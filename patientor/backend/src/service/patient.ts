import { type Patient, type NonSensitivePatient} from '../types/Patient.ts';
import patientData from '../data/patients.ts';

const get = (): Patient[] => {
  return patientData;
};

const getNonSensitive = (): NonSensitivePatient[] => {
  return patientData.map(p =>{
    return {
     id:p.id,
     name: p.name,
     dateOfBirth: p.dateOfBirth,
     gender: p.gender,
     occupation: p.occupation
    };
  });
};

const add = (obj: unknown) => {
  return patientData[0];
};
export default { get, getNonSensitive, add };
