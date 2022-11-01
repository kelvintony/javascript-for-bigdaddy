//! Classes
// what are classes: classes are blue print or prototype through which an object is created.
//A simple class contains member variables, constructors and functions.

class Circle {
	constructor() {}

	calculateArea(radius) {
		let area = Math.PI * radius * radius;
		return area;
	}

	calculatePerimeterOfCircle(radius) {
		let perimeter = 2 * Math.PI * radius;
		return perimeter;
	}
	calculateDiameterOfCircle(radius) {
		let diameter = 2 * radius;
		return diameter;
	}
	calculateLengthOfArc(angle, radius) {
		let length = angle * 2 * Math.PI * radius / 360;
		return length;
	}
	calculateAreaOfSectorOfCircle(angle, radius) {
		let area = angle * Math.PI * radius * radius / 360;
		return area;
	}
}

let number = new Circle();

console.log('the area of the circle is: ' + number.calculateArea(6));

console.log('the lenth of an arc is: ' + number.calculateLengthOfArc(150, 6));

//! WEB STORAGE / API
//* we use this approach to store data on the browser

let uniportStudents = [ 'jude max', 'akan ekog', 'alaye bobby' ];

let integralStudents = {
	fullName: 'jeremiah wizzy',
	course: 'intro to javascript',
	regNo: 'int/2022/001'
};

localStorage.clear();

//* JSON Javascript Object Notation
console.log(uniportStudents);
//! saving to localstorage without converting to its inherent data type
localStorage.setItem('studentInfo', uniportStudents);

let getUniportStudents = localStorage.getItem('studentInfo');

console.log(getUniportStudents);

//! saving to localstorage first by converting to its inherent data type
localStorage.setItem('studentInfo2', JSON.stringify(uniportStudents));

localStorage.setItem('integralStudentinfo', JSON.stringify(integralStudents));

let getUniportStudents2 = JSON.parse(localStorage.getItem('studentInfo2'));

let getintegralStudents = JSON.parse(localStorage.getItem('integralStudentinfo'));

console.log(getUniportStudents2);
console.log(getintegralStudents);
