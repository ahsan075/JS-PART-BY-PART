console.log('PART 3')
console.log('')
console.log('')
console.log('')



console.log('                                                 OBJECT')


//Object Literal
var point={
    x:10,
    y:20
}
console.log(point)

point.x=15
point.y=12
console.log(point)

//Object Constructor
var obj=Object()
obj.a=10
obj.b=18
console.log(obj)


console.log('')
console.log('                                                 Accessing OBJECT Properties')

var point={
    x:10,
    y:20,
    z:18
}
console.log(point.x+point.z)

console.log('')
console.log('                                                 ARRAY NOTATION')

console.log(point['x'])
var show='z'
console.log(point[show])


console.log('')
console.log('                                                 SETTING OBJECT PROPERTIES')

var point={
    x:10,
    y:20,
    z:18
}
var show='y'
point[show]=548
console.log(point)


console.log('')
console.log('                                                 REMOVE OBJECT PROPERTIES')

var point={
    x:10,
    y:20,
    z:18
}
delete point.y
console.log(point)

console.log('')
console.log('                                                 COMPARING TWO OBJECTS')

var obj1={
    a:15,
    b:13
}
var obj2={
    a:15,
    b:13
}

console.log(JSON.stringify(obj1)===JSON.stringify(obj2))


console.log('')
console.log('                                                 Iterate OBJECT Properties')

var point={
    x:10,
    y:20,
    z:18
}
console.log('x' in point)

console.log('')
console.log('                                                 For In LOOP')

for(var i in point){
    console.log(i+'='+point[i])
}


console.log('')
console.log('                                                 OBJECT METHODS')

var obj={
    x:10,
    y:20,
    z:18
}

console.log('OBJECT.KEYS() : '+Object.keys(obj))
console.log('OBJECT.VALUES() : '+Object.values(obj))
console.log('OBJECT.ENTRIES() : '+Object.entries(obj))



console.log('')
console.log('                                                CLONING A OBJECT')

var nObj=Object.assign({},obj)
nObj.x=1234
console.log(nObj)