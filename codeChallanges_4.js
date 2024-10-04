const bill = 275;

// const tip = bill >=50 && <= 300 : bill/100 : bill/100;
// if (bill >=50 && bill<= 300){
//     tip = bill * .2;
//     console.log(tip)
// }

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was $${bill}, The Tips is $${tip} And the total value is $${bill + tip}`);
