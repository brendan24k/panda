function hello(years, duration) {
    return years + duration;
}

var name = 'Brendan';
var job = 'student';
var age = 11;
var time = 6;

console.log('Hello, my name is ' + name
    + '. I am ' + age + ' years old and I am a ' + job + ' at Dalby State School.');

console.log('In ' + time + ' years i will be ' + hello(age, time));

