add = (x) => {

    if (x.trim().length == 0){
        return 0;
    }
    let numArr = x.match(/-?\d+/g).map(Number);

    let sum = 0;
    for(i of numArr){
        if(i < 0){
            return "negative not allowed";
        }
        sum += i;
    }
    return sum;
}

console.log(add("//;\n1;2"));

module.exports={add}