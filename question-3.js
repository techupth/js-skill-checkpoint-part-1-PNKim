// Question #3
// let userPassword = "swnalWadqQ";
// let userPassword = "TechUp"
let userPassword = "abcde";
// เริ่มเขียนโค้ดตรงนี้
const checkPasswordStrength = function (userPassword) {
  if (userPassword.length < 6) {
    return "Weak";
  } else if (userPassword.length >= 10) {
    return "Strong";
  } else {
    return "Medium";
  }
};

console.log(checkPasswordStrength(userPassword));
