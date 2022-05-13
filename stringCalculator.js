add = (x) => {

    if (x.trim().length == 0){
        return 0;
    }
    let numArr = x.match(/-?\d+/g).map(Number);
    let negativeStr = "";

    let sum = 0;
    for(i of numArr){
        if(i < 0){
            negativeStr = negativeStr + ", " + i;
        }
        sum += i;
    }
    console.log(negativeStr);
    if(negativeStr == ""){
        return sum;
    } else {
        return "negative not allowed" + negativeStr;
    }
}

console.log(add("-1,-3-4-5"));

module.exports={add}