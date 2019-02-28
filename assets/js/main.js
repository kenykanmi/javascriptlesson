 // var firstName = "Kenny"
// console.log(firstName);
//
//   var lastName = "Boyejo";
//   console.log(lastName);
//
//   const gender = "Female"
//   console.log(gender);
//
//   console.log(firstName + " " + lastName + " is a " + gender);
//
//   var x = "Tolu"
//   var y = 23
//   var z = false
//   var a = x + " is " + y +" years old" + z
//   console.log(a);
//   var y = 60;
//   var a = x + " is " + y + "years old" + z
//   console.log(typeof(a));
//   var age = prompt ('What is your age');
  // var salaryrange = prompt ('What is your salaryrange');

  // if (x =="Tolu") {
  //   alert('Yes it is true');
  // }else {
  //     alert('No it is not');
  // }
  //
  // if (age === 0 || age<= 17){
  //   alert('underage');
  // }else if (age ===18 || age<= 40) {
  //   alert('age');
  // }else if (age === 41 || age<= 60){
  //   alert('overage');
  // }else {
  //   alert ('nothing');
  // }
// if (salaryrange ===0 || salaryrange<=300000){
// alert('regular');
// }else if (salaryrange === 301000 || salaryrange<=600000){
//       alert ('gold');
// }else if (salaryrange ===600000 || salaryrange<=1000000){
// alert ('platinum');
// }else{
// alert('nothing');
// }



var package = prompt('Enter amount type');

switch (package){
  case "Regular":
    alert("Account type is Regular");
    break;
  case "Silver":
    alert ("Account type is Silver");
    break;
  case "Gold":
    alert("Account type is Gold");
    break;
  case "platinum":
    alert("Account type is platinum");
    break;
  default:
    alert("Account Invalid");

}
