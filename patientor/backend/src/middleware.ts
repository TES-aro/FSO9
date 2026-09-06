import { type Request, type Response, type NextFunction } from 'express';
import { newPatientSchema } from './service/patient.ts';
import z from 'zod';

const patientParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    newPatientSchema.parse(req.body);
    next();
  } catch (e){
    next(e);
  }
};

const errorHandler = (err: Error ,_req: Request, res: Response, _next: NextFunction) => {
  //let message = 'something went wrong';
  //if (err.message) {
  //  message = err.message;
  //}
  //res.status(513).json({
  //  error: message
  //});
  if (err instanceof z.ZodError) {
    res.status(400).send({ error: 'zod errored out' });
  }
};

export default { patientParser, errorHandler };
