//Write a program that uses filter to remove all negative numbers from an array of numbers
var totalNumbers:number[]=[1,-2,3,4,-5,6,7,-8,-9,10,11,-12,-13,14,-15];
let evenNumbers =totalNumbers.filter((data)=>{
    if(data>=0){
        return data;
    }
})
console.log("Assignment # 1:",evenNumbers)






//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
var array:number[]=[1,2,3,4,5];
let resultantArray=array.map((result)=>{
    return result*2;
})
console.log("Assignment # 2:",resultantArray)




/*Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array
 containing only the fruits with more than 5 characters.*/
 var fruits:string[]=["apple","banana","cherry","date","grape"];
 var charac=fruits.filter((fiveChar)=>{
 if(fiveChar.length>=5){
    return fiveChar
 }
 })
 console.log("Assignment # 3:",charac)




 /*Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the 
 squares of even numbers.*/
var num:number[]=[1,2,3,4,5,6,7,8,9,10];
let squareOfEvenNumbers=num.filter((even)=>{
    if(even%2==0){
        return even**2;
    }
})
console.log("Assignment # 4:",squareOfEvenNumbers);




/*Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where 
each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.*/
var celTemp:number[]=[0,10,20,30,40];
var fahTemp=celTemp.map((fahrenhiet)=>{
    return fahrenhiet*(9/5)+32; `${fahTemp}F`
})
console.log("Assignment no 5:",fahTemp)





 