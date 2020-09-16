var val = []
for (let i=1 ; i <= 20 ; i++){
    this.val.push(i)
    console.log(this.val)
}
let temp =['apple', 'banana', 'kiwi']

// temp.forEach((element, idx) =>{
//     console.log(idx, element)
// })

let newValue =temp.map((element, idx) => {
    return `${idx+1}.${element}`
})

let fillterrr = i.filter(el => el >= 0)
console.log(fillterrr)