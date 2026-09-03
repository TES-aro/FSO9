import express, { type Response } from 'express';
import diagnoses from '../data/diagnoses.ts';
import type Diagnosis from '../types/Diagnosis.ts';

const diagnosisRouter = express.Router();

diagnosisRouter.get('/', (_req, res: Response<Diagnosis[]>) => {
  res.send(diagnoses);
});

export default diagnosisRouter;
