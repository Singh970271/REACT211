const sum=require("./index")

describe('we are testing sum',()=>{  //  single test suite can contain many tests
 test("add 2 positive no",()=>{     // test
    expect(sum(1,2)).toBe(3);       // toBe=> === strict equality
 })
 test("3 is 3",()=>{
   expect(3).toBe(3)
 })
 test("Boolean values",()=>{
    expect(true).toBe(true);
    expect(false).toBe(false);
    expect(true).not.toBe(false)
 })
 test('toBe Number',()=>{
    expect(10).toBe(10)

})
test("toBe object a===a",()=>{
    var a={}
    expect(a).toBe(a)
})
test("Array []",()=>{
    expect([]).toEqual([])
})
})

