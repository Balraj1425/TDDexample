add = (x) => {

    if (x.trim().length == 0){
        return 0;
    }
    numArr = x.match(/-?\d+/g).map(Number);

    sum = 0;
    for(i of numArr){
        if(i < 0){
            return "negative not allowed";
        }
        console.log(i)
        sum += i;
    }
    return sum;
}

console.log(add(""));

module.exports={add}