import express from 'express';
import diagnosisRouter from './routes/diagnosis.ts';
import patientRouter from './routes/patients.ts';

const PORT = 3003;
const app = express();

app.use(express.json());

app.get('/api/ping', (_req, res) => {
  res.json({ message: 'hi' });
});

app.use('/api/patients', patientRouter);

app.use('/api/diagnoses', diagnosisRouter);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
