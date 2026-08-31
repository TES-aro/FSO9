export function calculateBmi(height: number, weight: number){
  const meters = height / 100;
  const bmi: number = weight / (meters^2);
  if (bmi < 18.5) {
    return 'Underweight';
  }
  if (bmi < 25) {
    return 'Normal range';
  }
  if (bmi <30) {
    return 'Overweight';
  }
  return 'Obese';
}
function readCommandline(){
  const args = process.argv;
  if (args.length !== 4){
    throw new Error('improper input');
  }
  const height = Number(args[2]);
  const weight = Number(args[3]);

  if (isNaN(height) || isNaN(weight)){
    throw new Error('only enter numbers');
  }

  console.log(calculateBmi(height, weight));
  
}
if (process.argv[1] === import.meta.filename) {
  readCommandline();
}
