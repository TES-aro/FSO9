export function calcuateExercise(exerciseArray: number[], target: number) {
  const dayCount = exerciseArray.length;
  const trainingDays = (exerciseArray.filter(i => i !== 0)).length;
  const average = (exerciseArray.reduce((a, c) => a+c, 0)) / dayCount;
  const reached = average >= target ? true : false;
  const {rating, explanation} = rate(average, target);
  return{
    periodLength: dayCount,
    trainingDays: trainingDays,
    success: reached,
    rating,
    ratingDescription: explanation,
    target,
    average
  };
}

const rate = (average: number, target: number) => {
  if (average < (target/2)) {
    return { rating:1, explanation: "poor" };
  }
  if (average < target*0.9) {
    return { rating: 2, explanation: "ehh"};
  }
  return {rating:3, explanation: "good"};
};

function readCommandline(){
  try {
    if (process.argv.length < 4){
      throw new Error('need at least two numbers as input');
    }
    const line = process.argv.slice(2);
    const clean = line.map(v => {
      const numberValue = Number(v);
      if (isNaN(numberValue)){
        throw new Error('improper inputs. only give numbers seperated by space');
      }
      return numberValue;
    });

    console.log(calcuateExercise(clean.slice(1), clean[0]));  

  } catch(e: unknown){
    console.error(e);
  }
}
if (process.argv[1] === import.meta.filename) {
  readCommandline();
}
