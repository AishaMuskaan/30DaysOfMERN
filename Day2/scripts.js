function myfunction(a,b){
    console.log(arguments.length)
}
myfunction(2,3)



function sum(n1,n2,n3){
    return n1 + n2 + n3;
}
result = console.log(sum(3,5,6))



function sumOfNumbers(...args){
    let sum = 0
    for(let num of args){
        sum += num
    }
    return sum;
}
result = console.log(sumOfNumbers(3,5,6))