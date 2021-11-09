

//import external package
const obj = require('underscore')

const obj1 = require('../src/logger')
const obj2 = require('../src/util/helper')
const obj3 = require('../validator/formmatter')

obj1.nameLog('Arti Dhole')
obj1.welcomeLog()
obj1.myUrlLog()// prints undefined when we pass argument and not pass value from here
// obj.myUrlLog("http://www.myappfuctionup.com")
//console.log("this is my url is " +obj.myUrlLog) //printing whole function

obj2.printDate()
obj2.printMonth()
obj2.GetBatch()

obj3.Trim()
obj3.Lower()
obj3.Upper()

console.log("...........................................................")

console.log(obj.first([1,2,3,4,56,7]))//first 
console.log(obj.first([1,2,3,4,56,7],5))// 5 give no of elements in arr
console.log(obj.last([1,2,3,4,56,7]))// last

console.log(obj.rest([1,'monday',3,'saturday',56,7],3))// rest ele starting from 3rd index

/*
Using the package ‘lodash’ solve below probolems

Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function
Using the tail function, return the last n-1 elements of an array containing the first 10 odd numbers
Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values
Use the function fromPairs to create a object contating key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]
*/
const _ = require('lodash')//importing

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//Create an array of strings containing all the months of a year and split the array into 4 equally sized sub-arrays
// Using the tail function

console.log(_.chunk(months,3))//for equal 4 sized

const arr=[0, 1, 3, 5, 7, 9, 11, 13, 17, 15]
console.log(_.tail(arr))


 console.log(_.union(["January", 2, "March", "April",4], ["June", "July", "August"], [5, "October", 67, "December"],[2], [1, 2]))
console.log(_.union([1, 2,3],[2], [1, 2],[1,2,3,4]))

const pairs= [['one',1],['two',2],['three',3],['four',4]]
console.log(_.fromPairs(pairs))
console.log(_.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','world']
]))