'use strict';

// Take the school object and create the following methods to
// that object:

const school = {
  // 1. A method called “findPerson” that takes two arguments,
  // a type (either a student or teacher), and an id.
  // It will return a particular object of that person.
  findPerson(type, id) {
    return this[type].find((person) => person.id === id);
  },

  // 2. A method called “assignStudent” that takes two
  // arguments, a student’s id and a subject.
  // Assign all of the students to the first available teacher who
  // teaches that subject and who is not in full capacity. If all of
  // the teachers are in full capacity log to the console “Sorry,
  // no available teachers left”.
  assignStudent(id, subject) {
    const availableTeacher = this.teachers.find(
      (teacher) => teacher.capacityLeft && teacher.subjects.includes(subject)
    );
    if (availableTeacher) {
      availableTeacher.students.push(this.findPerson('students', id));
      availableTeacher.capacityLeft--;
    } else {
      console.log('Sorry, no available teachers left');
    }
  },

  // 3. A method called “assignTeachersSubject” that takes two
  // arguments, the teacher’s id, a new subject.
  // Assign the new subject to that particular teacher if that
  // subject doesn’t exist in their array of subjects
  assignTeachersSubject(id, newSubject) {
    const teacher = this.findPerson('teachers', id);
    if (!teacher.subjects.includes(newSubject)) {
      teacher.subjects.push(newSubject);
    }
  },

  // 4. Create a new method of anything you want.
  hireTeacher(name, subjectsArr, capacity) {
    const newTeacher = {
      id: this.teachers.length,
      name,
      subjects: [...subjectsArr],
      students: [],
      capacityLeft: capacity,
    };
    while (this.teachers.find((teacher) => teacher.id === newTeacher.id)) {
      newTeacher.id++;
    }
    this.teachers.push(newTeacher);
  },

  teachers: [
    {
      id: 1,
      name: 'Pinchas',
      subjects: ['chemistry', 'biology', 'physics'],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: 'Williams',
      subjects: ['history', 'ethics'],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: 'Jennifer',
      age: 20,
    },
    {
      id: 11,
      name: 'Howard',
      age: 23,
    },
    {
      id: 12,
      name: 'Old-Timmy',
      age: 86,
    },
    {
      id: 13,
      name: 'Houston',
      age: 21,
    },
  ],
};

console.log(school.findPerson('students', 10));
console.log(school.findPerson('teachers', 1));
school.assignStudent(10, 'biology');
school.assignStudent(11, 'biology');
school.assignStudent(12, 'biology');
console.log(school.findPerson('teachers', 1));
school.assignStudent(14, 'biology');
school.assignTeachersSubject(1, 'ethics');
console.log(school.findPerson('teachers', 1));

school.hireTeacher('Chris', ['Math'], 4);
console.log(school.findPerson('teachers', 3));
