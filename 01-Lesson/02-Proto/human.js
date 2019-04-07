function Person(firstName, lastName, age, sex) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.sex = sex;
}

var persons = [
(new Person('Alex', 'Trust', 35, 'male')), 
(new Person('Mary', 'Ann', 11, 'male')),
(new Person('Jon', 'Dou', 46, 'male')),
(new Person('Tony', 'Stark', 14, 'male')),
(new Person('Anton', 'Kusukov', 25, 'male'))];


Person.prototype.sortByAge = function() {
  persons.sort(this.age);
};

console.log(persons);