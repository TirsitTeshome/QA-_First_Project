const { add, subtract, multiply } = require("./math");

test("adding",()=>{
    expect(add(5,5)).toBe(10);
});
test("subtracting", ()=>{
    expect(subtract(6,4)).toBe(2);
});
test("multiply", ()=>{
    expect(multiply(6,4)).toBe(24);
});

