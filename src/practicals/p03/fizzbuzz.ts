// Write your code below
const inputNumber = process.argv[2];
const point = Number(inputNumber);

if(Number.isNaN(point) || inputNumber === ''){
    // process.exit();
} else { 
    for(let i = 1; i<=point; i++) {
    if (i % 3 == 0 && i % 5 == 0){
    console.log('FizzBuzz');  
    } else if (i % 3 == 0){
    console.log('Fizz');   
    } else if (i % 5 == 0){
    console.log('Buzz');  
    } else {
    console.log(`${i}`);
    } 
}
}


