//1Write a function addToArray that accepts two arguments, array and string, and returns the same array after adding the string element to the end of it.
const addToArray = function (array, string) {
  array.push(string);
  console.log(array);
};

//2Write a function convertToString that accepts an argument array of strings , and returns a string made out of the array values.
const convertToString = function (array) {
  console.log(array.join(" "));
};

//3Write a function updateValue that accepts three arguments, array, index, and value, return "there is no element to updated in this index" if there is no element in selceted index. or returns an updated array. the array values are unique, no duplicate values in the array
const updateValue = function (array, index, value) {
  if (array[index] !== undefined) {
    array.splice(index, 1, value);
    return array;
  }
  return " there is no element in selceted index";
};

//4 Write a function onlyString that accepts an arguments, array . the function must create a new array and return only string in this array
const onlyString = function (array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "string") {
      arr.push(array[i]);
    }
  }
  return arr;
};

//5Write a function login that accepts two string arguments, username and password, and returns a message saying "Login Successful" or "Login Failed" depending on whether the login information matches the data in the given array.
const users = [
  ["Jane", "123456"],
  ["admin", "abc123"],
];

const login = function (username, password) {
  //    if(username === users[users.indexOf(username)][0] &&  password === users[indexOf(password)][1]){
  // return ' Login Successful';}
  //    return "Login Failed" ;
  for (let i = 0; i < users.length; i++) {
    if (users[i][0] === username && users[i][1] === password) {
      return " Login Successful";
    }
    return "Login Failed";
  }
};

//6Write a function maximumNumber that accepts an array of numbers and returns the highest number in the array.
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

//7Write a function reversString that accepts a string and returns the string reversed.
const reversString = function (string) {
  return string.split("").reverse().join("");
};

//Extra1
const allUsers = [
  { username: "Jane", password: "123456" },
  { username: "admin", password: "abc123" },
];
const createUser = function (usernamei, passwordi) {
  if (allUsers.some((allUsers) => allUsers.username === usernamei)) {
    return "That username is not available";
  }
  allUsers.push({ username: usernamei, password: passwordi });
  return "Registration successful";
};

//Extra2 not sure
const sliceArray = function (array, control) {
  let returnarray = [];
  for (let i = 0; i <= array.length; i++) {
    returnarray.push([array.splice(0, control)]);
  }
  return returnarray;
};
