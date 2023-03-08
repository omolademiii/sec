// An array is an object that stores multiple values at one
//[] to denote an array


//using an array literal (most popular way in javaScript)
//let names = ['Daniel', 'oluwaseun', 'Benita', 'Barituka', 'chioma'];

//using the new keyword
//let names2 = new Array('Daniel', 'oluwaseun', 'Benita', 'Barituka', 'chioma')

//console.log(names)
//console.log(names2)

//you can have an array of mixed data type

//let arrayOfMixedDataTypes = [30, false, 'Nigeria']
//console.log(arrayOfMixedDataTypes)


//add elements to an array

//let countries = ['Libya']
//adding element to the end of an array
//countries.push('Mali', 'Egypt');
//console.log(countries);


//adding elements to the beginning to an array
//countries.unshift('Ghana');
//console.log(countries)

//finding the length of an array
//let numberOfCountries = countries.length;
//console.log(numberOfCountries);

//let array1 = []
//console.log(array1.length)

//accessing items in an array
// to access kenya in ['kenya', 'tanzania', 'ghana']
//const firstItem = countries[0]
//console.log(firstItem)

//removing elements from an array
//removing the last element

///console.log(countries)
//countries.pop()
//console.log(countries)

//to get back a removed last element
//const removedElent = countries.pop()
//console.log(countries)
//console.log(removedElement)

//removing the first element

//console.log(countries)
//countries.shift()
//console.log(countries)


//to get back a removed first element
//const removedElement = countries.shift()
//console.log(countries)
//console.log(removedElement)

//ADDING,REMOVING AND REPLACING AT ANY POINT IN THE ARRAY
//Using the SPLICE METHOD
//The splice method()can takes in atleast one argument called
//(start) which basically means where do you want to start your operation?
//(deletecount) - how many array elements do you want to remove starting from the index?
//(item1...itemN) - elements you want to insert into the array

//splice(start, deletecount, item)

//let currencies = ['NGN', 'USD', 'YEN', 'EURO'];
//currencies.splice(0, 0, 'GBP', 'CAD', 'CEDIS', 'ZAR')
//console.log(currencies)

//adding elements in between an array

//currencies.splice(2, 0, 'GBP', 'CAD', 'CEDIS', 'ZAR')
//console.log(currencies)

//REMOVING ELEMENTS IN AN ARRAY
//REMOVING USD AND YEN 

//currencies.splice(1, 2,)
//console.log(currencies)

//REPLACE ELEMENTS IN AN ARRAY
//currencies.splice(1, 2, 'GBP', 'CAD', 'CEDIS', 'ZAR')
//console.log(currencies)



      //MERGING ARRAYS
      //Using the concat() method

      let cheapCars = ['Audi', 'Mazda', 'Nissan'];
      let expensiveCars = ['Lamborghini', 'Ferrari', 'Maserati'];

      //let allCars = cheapCars.concat(expensiveCars);
      //console.log(allCars)

      let commonCars = ['Honda', 'Toyota', 'Mercedes'];
      let allCars = cheapCars.concat(expensiveCars).concat(commonCars)
      console.log(allCars)

      //how do you know if an element is present in an array?

      //using indexOf()
      let ferrariIndex = allCars.indexOf('Ferrari')
      console.log(ferrariIndex)
