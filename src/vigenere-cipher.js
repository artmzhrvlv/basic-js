const CustomError = require("../extensions/custom-error");
const dictString = "abcdefghijklmnopqrstuvwxyz";
const dictArray = dictString.split('');
class VigenereCipheringMachine {
  constructor(direct) {
    if (direct === undefined || direct === true) direct = true;
    this.directSeq = direct;
  }
  encrypt(message, key) {
    let newKey = '', solutionStr = '', sum = 0, j = 0;

    for (let i = 0; i < message.length; i++) {
      if (dictArray.indexOf((message[i].toLowerCase())) === -1 || message[i] === ' ') newKey += message[i];
      else {
        newKey += key[j].toLowerCase();
        j++;
        if (j === key.length) j = 0;
      }
    }
    for (let i = 0; i < message.length; i++) {
      if (dictArray.indexOf((message[i].toLowerCase())) === -1 || message[i] === ' ') solutionStr += message[i];
      else {
        if (dictArray.indexOf(newKey[i]) + dictArray.indexOf(message[i].toLowerCase()) >= 26){

          sum = dictArray.indexOf(newKey[i]) + dictArray.indexOf(message[i].toLowerCase()) - 26;
        }
        else {
          sum = dictArray.indexOf(newKey[i]) + dictArray.indexOf(message[i].toLowerCase());
        }
        solutionStr += dictArray[sum];
      } 
    }
    return (this.directSeq) ? solutionStr.toUpperCase() : solutionStr.split('').reverse().join('').toUpperCase();
  }    
  decrypt(message, key) {
    let newKey = '', solutionStr = '', sum = 0, j = 0;

    for (let i = 0; i < message.length; i++) {
      if (dictArray.indexOf((message[i].toLowerCase())) === -1 || message[i] === ' ') newKey += message[i];
      else {
        newKey += key[j].toLowerCase();
        j++;
        if (j === key.length) j = 0;
      }
    }
    for (let i = 0; i < message.length; i++) {
      if (dictArray.indexOf((message[i].toLowerCase())) === -1 || message[i] === ' ') solutionStr += message[i];
      else {
        if (dictArray.indexOf(message[i].toLowerCase()) - dictArray.indexOf(newKey[i]) < 0) {
          sum = dictArray.indexOf(message[i].toLowerCase()) - dictArray.indexOf(newKey[i]) + 26;
        }
        else {
          sum = dictArray.indexOf(message[i].toLowerCase()) - dictArray.indexOf(newKey[i]);
        }   
        solutionStr += dictArray[sum];
      }
    }   
    return (this.directSeq) ? solutionStr.toUpperCase() : solutionStr.split('').reverse().join('').toUpperCase();
  }
}
module.exports = VigenereCipheringMachine;
