import express from 'express';
import patients from '../service/patient.ts';

const route = express.Router();

route.get('/', (_req, res) => {
  try{
    res.json(patients.getNonSensitive());
  } catch {
    res.status(500);
  }
});

route.put('/', (req, res) => {
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
