const retirementAgeCalc = birthdate => {
    const currentAge = 2024 - birthdate;
    const retirementAge = 60- currentAge;
    const retirementYear = 2024 + retirementAge;
    return `My birthdate is ${birthdate}, Currently I am ${currentAge} years old and I will retired at ${retirementYear}`;
}

console.log(retirementAgeCalc(1995));

NBCU
Executive
Due to family issue
May 2023