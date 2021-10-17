//Write a function addToArray that accepts two arguments, array and string, and returns the same array after adding the string element to the end of it.
const addToArray = function (array, string) {
  array.push(string);
  console.log(array);
};

//Write a function convertToString that accepts an argument array of strings , and returns a string made out of the array values.
const convertToString = function (array) {
  console.log(array.join(" "));
};

//Write a function updateValue that accepts three arguments, array, index, and value, return "there is no element to updated in this index" if there is no element in selceted index. or returns an updated array. the array values are unique, no duplicate values in the array
const updateOrCreate = function (array, value, index) {
  if (array[index] !== undefined) {
    return array[index];
  }
  return " there is no element in selceted index";
};

//Write a function onlyString that accepts an arguments, array . the function must create a new array and return only string in this array
const onlyString = function (array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "string") {
      arr.push(array[i]);
    }
  }
  return arr;
};

//Write a function login that accepts two string arguments, username and password, and returns a message saying "Login Successful" or "Login Failed" depending on whether the login information matches the data in the given array.
const users = [
  ["Jane", "123456"],
  ["admin", "abc123"],
];

const login = function (username, password) {
  //    if(username === users[users.indexOf(username)][0] &&  password === users[indexOf(password)][1]){
  // return ' Login Successful';}
  //    return "Login Failed" ;
  for (let i = 0; i < users.length; i++) {
    if (users[i][0] == username && users[i][1] == password) {
      return " Login Successful";
    }
    return "Login Failed";
  }
};

//Write a function maximumNumber that accepts an array of numbers and returns the highest number in the array.
const maximumNumber = function (numbers) {
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
  //  return Math.max.apply(Math, numbers)  ;
};

// Write a function reversString that accepts a string and returns the string reversed.
const reversString = function (string) {
  return string.split("").reverse().join("");
};
