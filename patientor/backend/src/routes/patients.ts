import express, { type Request } from 'express';
import patients from '../service/patient.ts';
import { type NewPatient } from '../service/patient.ts';
import mw from '../middleware.ts';

const route = express.Router();

route.get('/', (_req, res) => {
  console.log('in here');
  res.json(patients.getNonSensitive());
});

route.post('/', mw.patientParser, (req: Request<unknown, unknown, NewPatient>, res) => {
  try {
    const patient = patients.add(req.body);
    res.json(patient);
  } catch (e) {
    let message = 'something went wrong';
    if (e instanceof Error && e.message) {
      message += `: ${e.message}`;
    }
    res.status(400).send(message);
  }
});

export default route;
