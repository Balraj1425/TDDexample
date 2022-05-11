add = (x, y) => {
    if(x<0 || y<0){
        return "negative not allowed"
    } else {
        return x+y;
    }
}

module.exports={add}