let tinggibadan = [140, 145, 150, 155, 160, 165,
    170, 175, 180, 185,190];

console.log("<= for biasa =>");

for (var i = 0; i < tinggibadan.length; i++){
console.log(tinggibadan[i]);
}	

console.log("<= for of =>");

for (let tg of tinggibadan) {
console.log(tg);
}