// Create a function that takes 1 argument, a number score.
// Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D”
// 70-79 is a “C”
// 80-89 is a “B”
// 90-100 is an “A

const gradeAssinger = (grade) => {
  const num_grade = 1 * grade;
  let to_return = '';
  if (num_grade < 65) {
    to_return = 'F';
  } else if (num_grade < 70) {
    to_return = 'D';
  } else if (num_grade < 80) {
    to_return = 'C';
  } else if (num_grade < 90) {
    to_return = 'B';
  } else {
    to_return = 'A';
  }
  return to_return;
};
