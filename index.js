// let username = 'Emanuel';
// let age = '18';
// let hasHobbies = false;
// let points = [10,20,30];
// let user = {
//     name: 'ryan',
//     lastname: 'ray'
// }
// const PI = 3.1415

// console.log(username);
// console.log(age);
// console.log(hasHobbies);
// console.log(points);
// console.log(user);
// console.log(PI);

const age = 14

if (age >=18) {
    console.log("you are an adult")
} else if (age >= 13){
    console.log("you are a teenager")
} else {
    console.log("You are a child")
}

const names = ['joe','john','marco']

for (let i = 0; i < names.length; i++) {
    console.log(names[i])

}

function showUserInfo(userName, userAge) {
  return `The username is ${userName}, the user is ${userAge} years old`;
}

showUserInfo("Emanuel", 18);
showUserInfo("Juana ", 20);

console.log(showUserInfo("Emanuel", 18));
console.log(showUserInfo("Juana ", 20));
