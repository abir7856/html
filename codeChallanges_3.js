const dolphinsAvrg1 = (96+108+89)/3;
const dolphinsAvrg2 = (97+112+101)/3;
const dolphinsAvrg3 = (97+112+101)/3;

const kolasAvrg1 = (88+91+110)/3;
const kolasAvrg2 = (109+95+123)/3;
const kolasAvrg3 = (109+95+106)/3;

if(dolphinsAvrg1 > kolasAvrg1 && dolphinsAvrg1 !== kolasAvrg1 && (kolasAvrg1 >= 100 || dolphinsAvrg1 >= 100))
    console.log("Dolphins is the winner");
else if (dolphinsAvrg1 < kolasAvrg1 && dolphinsAvrg1 !== kolasAvrg1  && (kolasAvrg1 >= 100 || dolphinsAvrg1 >= 100)) {
    console.log("Kolas is the winner");
}
else 
    console.log("No one is the winner!");

if(dolphinsAvrg2 > kolasAvrg2 && dolphinsAvrg2 !== kolasAvrg2  && (kolasAvrg2 >= 100 || dolphinsAvrg2 >= 100))
        console.log("Dolphins is the winner");
    else if (dolphinsAvrg2 < kolasAvrg2 && dolphinsAvrg2 !== kolasAvrg2  && (kolasAvrg2 >= 100 || dolphinsAvrg2 >= 100)) {
        console.log("Kolas is the winner");
    }
    else
        console.log("Winner is draw!");

if(dolphinsAvrg3 > kolasAvrg3 && dolphinsAvrg3 !== kolasAvrg3   && (kolasAvrg3 >= 100 || dolphinsAvrg3 >= 100))
            console.log("Dolphins is the winner");
        else if (dolphinsAvrg3 < kolasAvrg3 && dolphinsAvrg3 !== kolasAvrg3 && (kolasAvrg3 >= 100 || dolphinsAvrg3 >= 100)) {
            console.log("Kolas is the winner");
        }
        else 
            console.log("Winner is draw!");

console.log(dolphinsAvrg1);
console.log(dolphinsAvrg2);
console.log(dolphinsAvrg3);
console.log(kolasAvrg1);
console.log(kolasAvrg2);
console.log(kolasAvrg3);