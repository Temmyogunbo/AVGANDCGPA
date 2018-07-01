const fs = require('fs');
const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const findCourseAverage = (courses) => {
  const size = courses.length;
  let sum = 0;

  for (let course of courses) {
    sum += Number(course);
  };
  return sum / size;
};

const findCgpa = (courses) => {
  let result;
  let dividend = 0;
  const size = courses.length;

  for (let course of courses) {
    dividend += Number(course) / 20;
  };

  result = dividend / size;
  return Math.floor(result * 100) / 100;
};

const mapToStudents = (students) => {
  return students.map((eachStudent) => {
    const newEachStudent = eachStudent.split(',');
    return newEachStudent;
  });
};

const processFile = (fileName) => {
  if (fs.existsSync(__dirname + '/' + fileName)) {
    let body = '';
    const readStream = fs.createReadStream(__dirname + '/' + fileName);
    readStream.on('data', (data) => {
      body += data;
    });

    readStream.on('end', () => {
      const splitBody = body.split('\n');
      const students = mapToStudents(splitBody);

      process.stdout.write('\nPrinting results ...\n\n')
      for (let student of students) {
        let courses = student.slice(2);
        const average = findCourseAverage(courses);
        const cgpa = findCgpa(courses);

        process.stdout.write(`\t${student[1]} (${student[0]}): ${average} ${cgpa}\n\n`)
      }
    })
  }
  process.stdout.write('No such file\n');
}

r1.on('line', (line) => {
  const arg = line.split(' ');
  const fileName = arg[1].trim();

  if (arg[0] === 'findAvgAndCgpa') {
    processFile(fileName);
  }
  process.stdout.write('Invalid arguments\n');
});
