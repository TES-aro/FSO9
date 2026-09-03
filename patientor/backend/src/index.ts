import express from 'express';
import diagnosisRouter from './controllers/diagnosis';
import patientRouter from './controllers/patient';

const PORT = 3003;
const app = express();

app.get("/api/ping", (_req, res) => {
  res.json({message: "hi"});
});

app.use("/api/patients", patientRouter);

app.use("/api/diagnoses", diagnosisRouter);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
