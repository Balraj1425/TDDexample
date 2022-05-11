add = (x) => {

    if (x.trim().length == 0){
        return 0;
    }
    numArr = x.match(/-?\d+/g).map(Number);

    sum = 0;
    for(i of numArr){
        console.log(i)
        sum += i;
    }
    return sum;
}

console.log(add(""));

module.exports={add}