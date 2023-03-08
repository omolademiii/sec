// an object is a collection of related data and functions,it consists of variables and functions
//properties = variables / data
// functionality = functions

// CAR
/**
 * properties - brand, color, number of tires, num of doors, isAutomatic.
 * functionalities - move forward, reverse, accelerate, play music, stop, start
 * 
 * HOW WE CAN CREATE AN OBJECT
 * 1. Literal notation
 * 2. Construction notation
 */

//syntax for literal notation

//const objectName = {
   // key: value1,
   // key: value2,
    //key represents the property
//}

//const car = {
    //brand: 'porshe';
    //color: 'black';
    //numberOfTyre: 4;
    //numberOfDoors: 4;
    //isAutomatic: true;
    //currentDistace = =0;
    //displayNumberOfTyres: function() {
        //return this.displayNumberOfTyres;
    //},
    //moveForward: function() {
        //this.currentDistace++;
        //return this.currentDistance;
    //}

//}
//console.log(car)


//CONSTRUCTOR NOTATION
//syntax
//const objectName = new < what you want to create an instance of>()
//new - used when you are creating an instance of a function
//const car2 = new Object();
//car2.brand = 'Mercedes Benz';
//car2.color = 'white';
//car2.numberOfTyres = 4;
//car2.numberOfDoors = 4;
//car2.isAutomatic = false;
//car2.displayNumberOfTyres = function(){
    //return this.numberOfTyres;
//}
//console.log(car2);
       


            //Accessing object properties
/**
 * dot notation
 * syntax - objectName.key
 */
//console.log('Brand of car one is ' + car.brand)

/**
 * BRACKET NOTATION
 * syntax - objectName['propertyName]
 */
//console.log('color of car one is ' + car['color'])

//accessing object methods
//syntax = objectName.method();
//console.log('the number of tyres are ' + car.displayNumberOfTyres())
//console.log(car.moveForward());


//constructor notation can be used as a template or blueprint for creating new objects

//TOYOTA
//Avensis, corolla, rav4, Camry, Highlander

// common properties a Toyota car has
/**
 * properties- numberOfTyres, brand, numberOfDoors, numberOfSpareTyres, isAutomatic
 * methods - reverse, move forward, accelerate, stop, start
 */
//function Toyota(model, year, numberOfTyres, isAutomatic, currentDistance) {
    //this.numberOfTyres = 4;
    //this.brand = Toyota;
    //this.model = model;
    //this.year = year;
    //this.isAutomatic = true;
    //this.currentDistance = 0;
    //this.accelerate = function() {
        //this.currentDistance += 5;
    //}
    //this.displayNumberOfDistance = function() {
        //return this.currentDistance;
    //}
//}
//let camry = new Toyota('camry', 2000, 5, true, 1000)
//console.log(camry)
//function in an object is called method


//classwork
// i want you to create an address object with three properties which are street, city, and zip code using the object litreal syntax.

//const address = {
    //street: 'yaba',
    //city: 'lagos',
    //zip: 23401
//}
//console.log(address)


//i want you to create an address object with three properties which are street, city, and zip code using the object constuctor syntax

//const address2 = new Object();
//address2.street= 'Ikorodu';
//address2.city = 'Lagos';
//address2.zip= 23434;

//console.log(address2)

//function Address(street, city, zip) {
    //this.street = street;
    //this.city = city;
    //this.zip = zip;
//}
//const address3 = new Address('olumo', 'port-harcourt', 23466)
//console.log(address3)



//OBJECT CONT'D - FACTORY 
//Factory function is a function that creates an object
//function houseAddress(street, city, zip){
    //return{
        //street: street,
        //city: city,
        //zip: zip,
    //}
//}

//const address5 = houseAddress('Abule-egba' , 'Lagos' , 34945);
//console.log(address5)



          //NEXTED OBJECT -WHICH MEANS  an object can also contain another object
          //const student = {
            //firstName: 'Chimatara',
            //lastName: 'Kalu',
            //age: 18,
            //jambScores: {
                //eng: 80,
                //math: 85,
                //phy: 95,
                //chm: 90,
            //}
          //}
          //console.log(student)

          //to access the chm score using dot notation
          //let chemScore = student.jambScores.chm;
          //console.log('chemistry score is ' + chemScore)

          //to access math using bracket notation

          //let mathScore = student['jambScores']['math'];
          //console.log( 'math score is ' + mathScore)

          //MODIFYING CREATED OBJECTS
          //student.course = 'Computer Science';
          //student.jambScores.bio = 70;
          //console.log(student);

          //NEXTED OBJECT USING CONSTRUCTOR FUNCTION
function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
let Chimatara = new Student('chimatara', 'Kalu',18);
console.log(Chimatara);

function jambScores(phy, chm, bio, govt) {
    this.phy = phy;
    this.chm = chm;
    this.bio = bio;
    this.govt = govt;
}
console.log(Chimatara);
Chimatara.jambScores = new jambScores(80, 70, 0, 0)
console.log(Chimatara.jambScores.bio)

//DIFFERENCE BTW VALUE TYPE AND REFERENCE TYPE
/**
 * PRIMITIVE data types are passed by value e.g string, number,boolean,undefined,null
 * NON-PRIMITIVE data types are passed by reference e.g Arrays, objects, functions
 */
//for value 
//let x = 1;
//let y = x;
//that means y =1 also but if the value of x is changed,y doesnt change i.e x=2 doesnt change the initial y value
 

//for reference 
 //let a = [1];
 //let b = a; means b equals a and everychange in a affects b


//HOW TO COPY/CLONE AN OBJECT
// Option 1 - using Object.assign()

const firstBook = {
    author: 'Chimamanda adichie',
    title: 'Half of a yellow sun',
    yearPublished: 2008,
}

const secondBook1 = Object.assign({}, firstBook) //object.assign(target,source)
console.log(firstBook1);
console.log(secondBook);

secondBook1.title = 'Purple Hibiscus';

console.log('After change title of second book')
console.log(firstBook1)
console.log(secondBook)

//option 2 - using the spread syntax

const thirdBook = {...firstBook};
thirdBook.title = 'Americana';
console.log({firstBook});
console.log({thirdBook});

//option 3 - using the method JSON.parsel()
const fourthBook = JSON.parse(JSON.stringify())
fourthBook.title = 'Notes on Grief';
console.log({firstBook});
console.log({fourthBook})

//MERGE OBJECTS
//Option1 - Using object.assign
const firstBookDetails = {
    publisher: 'Penguin Books',
    copiesSold: '1 million',
    pages: '502',
    edition: '3rd'
}

Object.assign(firstBook, firstBookDetails);
console.log({firtsBook});


//option 2 - using spread operator - ...
onst secondBookDetails = {
    publisher: 'Penguin Books',
    copiesSold: '1 million',
    pages: '502',
    edition: '3rd'
}

const secondBookInfo = {...secondBook, ...secondBookDetails}
console.log({secondBookInfo})


// ENUMERATION OF PROPERTIES IN AN OBJECT

/**
 * for .. in loops
 */
for(const propert in secondBookInfo) {
    //  action to be carried out on each property
    console.log(property);
    console.log(secondBookInfo[property]);
}

//object.keys()
console.log(object.keys(secondBookInfo)) // an array of keys
for (let key of Object.keys(secondBooksInfo)) {
    console.log(key);
    console.log(secondBookInfo[key])
}


//add kia to list of cars if not present
//if(kiaIndex === -1) {
    //allCars.push('kia')
//} else{
    //console.log('Kai is already present')
//}
//console.log(allCars)

//using includes()

let iskiaPresent = allCars.includes('kia')
//console.log(isKiaPresent)
if(iskiaPresent) {
    console.log('kia is already present')
} else {
    allCars.push('kia')
    console.log(allCars)
}
    //finding if an object exist in an array
    //using find();

    let isNissanPresent = arrayOfCrsObject.find(function (carObject)) {
        return carObject.car === 'Nissan';
    }

    console.log(isNissanPresent)

    

