import express, {type Response} from 'express';
import patientData, {addPatient} from '../data/patients.ts';
import pt, {type Patient, type SensoredPatient} from '../types/Patient.ts';

const patients = patientData;

const patientRouter = express.Router();

patientRouter.get('/', (_req, res: Response<SensoredPatient[]>) => {
  const sensoredPatients: SensoredPatient[] = patients.map((p: Patient) => {
    console.log(pt.sensorPatient(p));
    const sp = pt.sensorPatient(p);
    console.log(sp);
    return sp;
  });
  console.log(patients);
  console.log(patientData);
  console.log(sensoredPatients);
  res.json(sensoredPatients);
});

patientRouter.post('/', (req, res: Response<{error: string}|SensoredPatient>) => {
  const newPatient = addPatient(req.body);
  if (!newPatient){
    res.status(400).json({error: "improper request"});
    return;
  }
  res.json(newPatient);
});
export default patientRouter;
