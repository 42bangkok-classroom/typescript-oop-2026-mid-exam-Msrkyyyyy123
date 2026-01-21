// Write your code below
let points = (process.argv[2])
let Input1 = Number(points);

if(Number.isNaN(Input1)||(Input1 < 0) || (Input1 > 100) || points === '' || !points ){
   console.log("Invalid Input");
 
}

if (Input1 < 50) {
    console.log("Grade is F");
} else if (Input1 < 60) {
    console.log("Grade is D");
} else if (Input1 < 70) {
    console.log("Grade is C");
} else if (Input1 < 80) {
    console.log("Grade is B");
} else if (Input1 <= 100 ) {
    console.log("Grade is A");
}

