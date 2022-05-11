const {add} = require ('./stringCalculator')

test(
    "adding 2 and 3 is 5", ()=>{
        expect(add(2,3)).toBe(5)
    }
)

test(
    "negative addition", ()=>{
        expect(add(-1,-3)).toBe("negative not allowed")
    }
)