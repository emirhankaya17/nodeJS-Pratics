const ARGUMENTS = process.argv.slice(2);


function isPrime(number){
    if(number == 1) return false;
    if(number == 2) return true;
    let primeFlag = true;
    for (let i = 2;i<number;i++) {
        if(number%i == 0 && i>1){
            primeFlag = false;
            return false;
        }
        
    }
    return primeFlag;
}
function showAllPrime(lowNumber,highNumber){
    if(lowNumber>highNumber){console.log("Please correct input numbers"); return}

    for(let i = lowNumber;i<highNumber;i++){
        if(isPrime(i)) console.log(i);
    }
}

//showAllPrime(ARGUMENTS[0] *1,ARGUMENTS[1] *1);
console.log(process.argv[1])