add = (x) => {

    numArr = x.match(/-?\d+/g).map(Number);

    sum = 0;
    for(i of numArr){
        console.log(i)
        sum += i;
    }

    return sum;
    
    // if(x<0 || y<0){
    //     return "negative not allowed"
    // } else {
    //     return x+y;
    // }
}

console.log(add("1,4,-5"));

module.exports={add}