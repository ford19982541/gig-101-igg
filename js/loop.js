// for (let i=1 ; i <= 20 ; i++){
//     console.log(i)
// }
let temp =['apple', 'banana', 'kiwi']

// temp.forEach((element, idx) =>{
//     console.log(idx, element)
// })

let newValue =temp.map((element, idx) => {
    return `${idx}.${element}`
})

console.log(newValue)