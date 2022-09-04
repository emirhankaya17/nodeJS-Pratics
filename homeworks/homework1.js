const ARGUMENTS = process.argv.slice(2);

function findArea(radius){
    return Math.PI * radius * radius;
}

console.log("Yarıçapı "+ARGUMENTS[0]+" olan dairenin alanı: "+findArea(ARGUMENTS[0]));