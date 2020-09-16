var num =[]
for(let i=1;i<=20;i++){
    num.push(i)
    console.log(i)
}

let k = num.filter(el => {
       console.log(el%2 === 0 ? el : "")
})


var num2 = [-1,2,356,6,-93,0,4]
num2.map(e => {
    return e*2
})
console.log(num2)

var num3 = [10,13,44,55,89,0,12,1].filter(el => {
    if(el%2 == 0){
        return el
    }
})
console.log(num3)