var userArray = process.argv.slice(2);
var username, email;
[,username, email]= userArray;
console.log({username: username, email: email});