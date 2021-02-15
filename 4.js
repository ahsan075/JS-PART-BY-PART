console.log('PART 4')
console.log('')
console.log('')
console.log('')



console.log('                                                 FUNCTION ARGU AND PARAMETER')


//ARGU
function add(){
    var a=10
    var b=5
    console.log(a+b)
}
add()

//PARA
function add2(a,b){
    var res=a+b
    console.log(res)
}
add2(2,6)

//LONG
var arr1=[15,18,5]
var arr2=[18,20,14]
var arr3=[8,9,45]

var sum=0
for(var i=0;i<arr2.length;i++){
    sum+=arr2[i]
}
console.log(sum)

//Short
function sumofArray(arr){
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}
sumofArray(arr3)


console.log('')
console.log('                                                 ARGUMENT OBJECT')

function test(a,b,c){
    console.log(JSON.stringify(arguments))
}
test()

//EXAMPLE 1
function test2(){
    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i])
    }
}
test2(5,6,8)

//EXAMPLE 2
function test3(){
    var sum=0
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    console.log(sum)
}
test3(5,6,8)


console.log('')
console.log('                                                 RETURN SOMETHING FROM A FUNCTION')

function addALL(){
    var sum=0
    var sum=0
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum
}
var result=addALL(5,8,7)
console.log(result)

//EXAMPLE
function FULLNAME(fname,lname){
    return {
        fname:fname,
        lname:lname
    }
}
var Fullname=FULLNAME('AHSAN','SHAKIL')
console.log(Fullname)


console.log('')
console.log('                                                 FUNCTION EXPRESSION')

var addition=function(a,b){
    return a+b
}
var rea=addition(5,8)
console.log(rea)