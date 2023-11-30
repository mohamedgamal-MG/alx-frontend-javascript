export default class HolbertonCourse {
  constructor(name, lenght, students) {
    this._name = this.validateString(name, 'Name');
    this._lenght = this.validateNumber(length, 'Length');
    this._students = this.validateArray(students, 'Students');
  }

  //Getter and Setter for Name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateString(newName, 'Name');
  }

  //Getter and Setter for Length
  get length() {
    return this._length;
  }

  set length(newLegth) {
    this._length = this.validateNumber(newLength, 'Length');
  }

  // Getter and Setter for Students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validateArray(newStudents, 'Students');

  //Validation Functions

  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  validateNumber(value, attribute) {
    if (value !== 'number') {
      throw TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  validateArray(value, attribute) {
    if (!Array.isArray(value)) {
      throw TypeError(`${attribute} must be an array`);
    }
    return value;
  }
}
