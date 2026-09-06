import express from 'express';
import diagnosisRouter from './routes/diagnosis.ts';
import patientRouter from './routes/patients.ts';
import mw from './middleware.ts';
import cors from 'cors';

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.use('/api/patients', patientRouter);

app.use('/api/diagnoses', diagnosisRouter);

app.use(mw.errorHandler);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
