type Gender = "male" | "female" | "other";

export interface Patient {
  id: string,
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: Gender,
  occupation: string
}

const patientKeys = ["id", "name", "ssn", "dateOfBirth", "gender", "occupation"];

const isPatient = (obj: any) => {
  const keys = Object.keys(obj);
  for (const key of patientKeys){
    if(!keys.includes(key)){
      return false;
    }
    if(key === "gender"){
      if(!/(male)|(female)|(other)/.test(obj.gender)) {
        return false;
      }
    } else {
      if (typeof obj.key !== "string"){
        return false;
      }
    }
  }
  
  return true;
};
const toPatient = (obj: any): Patient => {
  const patient = {...obj};
  const objKeys = Object.keys(obj);
  if (objKeys.length !== patientKeys.length){
    const strangeKeys = objKeys.filter(key => {
      return !patientKeys.includes(key);
    });
    for (const key of strangeKeys){
      delete patient[key];
    }
  }
  return patient;
};

export type SensoredPatient = Omit<Patient, "ssn">;

const sensorPatient = (p: Patient): SensoredPatient => {
  console.log("in here");
  const sensoredP = {
  id: p.id,
  name: p.name,
  dateOfBirth: p.dateOfBirth,
  gender: p.gender,
  occupation: p.occupation
  };
  console.log(p);
  console.log(sensoredP);
  return sensoredP;
};
export default {isPatient, toPatient, sensorPatient};
