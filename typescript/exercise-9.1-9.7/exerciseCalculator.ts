interface resume {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}
function calculateExercises(exercise: number[], target: number): any {
  let daysFailed = exercise.filter((hours: number) => hours < target).length;
  let trainingDays = exercise.filter((hours: number) => hours > 0).length;
  let periodLength = exercise.length;
  let success = daysFailed > 0 ? false : true;

  let rating;
  let ratingDescription;

  if (daysFailed === 0) {
    rating = 3;
    ratingDescription = "Perfect!";
  } else if (daysFailed <= 3) {
    rating = 2;
    ratingDescription = "not too bad but could be better";
  } else if (daysFailed > 3) {
    rating = 1;
    ratingDescription = "sorry but it's not good at all";
  }

  let sum: number = 0;
  for (let i = 0; i < exercise.length; i++) {
    console.log(exercise[i]);
    sum += exercise[i];
  }

  let average = sum / periodLength;

  let resume = {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
  console.log(resume);
  return resume;
}

calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2);
