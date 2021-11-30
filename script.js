let num = 266219;
let digits = (""+num).split("");
let res = digits.reduce((acc, rec) => acc * rec);
let degree3 = res ** 3;
let twoNum = String(degree3).slice(0,2);
console.log(twoNum); 