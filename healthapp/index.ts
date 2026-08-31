import express from 'express';
import {calculateBmi} from './bmiCalculator.ts';
import { calcuateExercise } from './exerciseCalculator.ts';

const app = express();
app.use(express.json());
//const app2 = express();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isNumberArray = (input: any): boolean => {
  if (!Array.isArray(input)){
    return false;
  }
  return input.length > 0 && input.every(i => {
    return typeof i === 'number';
  });
};

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  try{
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    if (isNaN(height) || isNaN(weight)){
      throw new Error('malformatted parameters');
    }
    const bmi = calculateBmi(height, weight);
    res.status(200).json({
      weight,
      height,
      bmi
    });
  }catch(e){
    console.error(e);
    res.status(400).json({error:"malformatted parameters"});
  }
});


app.post('/exercises', (req, res) => {
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!req.body || !req.body.daily_exercises || !req.body.target){
    res.status(400).json({error: 'parameters missing'});
    return;
  }

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
  const exercises = req.body.daily_exercises;
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
  const target = req.body.target;

  
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  if (!isNumberArray(exercises) || isNaN(target)){
    res.status(400).json({error: 'malformatted parameters'});
    return;
  }
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  res.status(200).json(calcuateExercise(exercises, target));
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//app2.listen(3000, () => {
//  console.log('listening to 3000')
//})
