import signUpUser from "./44-user-promise";

const body = Promise.resolve();
console.log(signUpUser('Rigz', 'Lion', '254740389555', 'rigzlion@gmail.com', 'abcd12345'));
signUpUser(body);
