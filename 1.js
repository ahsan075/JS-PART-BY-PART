console.log('PART 1')
console.log('')
console.log('')
console.log('')







console.log('                                                 Number Method')
var a = '45.5678'
var b = Number(a)
console.log("Number : " + b)
console.log('isFinite : ' + Number.isFinite(b))
console.log('isInteger : ' + Number.isInteger(b))
console.log('Max : ' + Number.MAX_VALUE)
console.log('Min : ' + Number.MIN_VALUE)
console.log('parseInt : ' + parseInt(b))
console.log('parseFloat : ' + parseFloat(b))
console.log('toFixed : ' + b.toFixed(3))
console.log('toPrecision : ' + b.toPrecision(3))

console.log('')


console.log('                                                 Number to String')
var str = String(156)
console.log(str)
var nbr = str + 15
console.log(nbr)

console.log('')

console.log('                                                 Booleans')
var b1 = true
var b2 = Boolean(b1)
console.log(b2)
console.log('')


console.log('                                                 Null and Undefined')
var abc
var xyz = null
console.log(abc)
console.log(null)
console.log('')

console.log('                                                 Js Type Conversion')
var str = '1000'
var n = 10
console.log(str * n)
var b = 50
var d = b.toString()
var c = d + 10
console.log('Number to String : ' + c)
var bol = true
console.log('Boolean to String : ' + bol.toString())
console.log('')

console.log('                                                 Octal and Hexadecimal')
var hex = 0xee
console.log('Hexadecimal : ' + hex)
var oct = 07654
console.log('Octal : ' + oct)
console.log('')


console.log('                                                Arithmetic Operators')
// +,-,*,/,%,++,--
console.log('')



console.log('                                                 Assignment Operators')
// =,+=,-=,*=,/=,%=
console.log('')



console.log('                                                 Comparision Operators')
//  ==,===,!=,!==,>,>=,<,<=
console.log('')



console.log('                                                 Bitwise Operators')
// &,|,~,^,<<,>>,>>>
console.log('')



console.log('                                                Logical Operators')
// &&,||,!
console.log('')




console.log('                                                 Math Functions')

console.log('value of e : ' + Math.E)

console.log('Value of PI : ' + Math.PI)

var n = 4.3678
console.log('Absolute Value : ' + Math.abs(n))

console.log('Floor : ' + Math.floor(n))

console.log('Ceil : ' + Math.ceil(n))

console.log('Round : ' + Math.round(n))

console.log('Trunc : ' + Math.trunc(8.55))

console.log('Power : ' + Math.pow(2, 3))

console.log('sqrt : ' + Math.sqrt(4))

console.log('cbrt : ' + Math.cbrt(8))

console.log('Random : ' + Math.random() * 50)

console.log('Max value : ' + Math.max(5, 4, 7, 8, 9, 12, 15))

console.log('Min value : ' + Math.min(5, 4, 7, 8, 9, 12, 15))
console.log('')




console.log('                                                 Date Functions')

var date = new Date()
console.log(date)

console.log('Date Time Shortcut : ' + date.toLocaleString())

console.log('Date : ' + date.toDateString())

console.log('Time : ' + date.toTimeString())


///GET

console.log('Year : ' + date.getFullYear())

console.log('Month : ' + date.getMonth())

console.log('Hours : ' + date.getHours())

console.log('Min : ' + date.getMinutes())

console.log('Sec : ' + date.getSeconds())

console.log('milisec : ' + date.getMilliseconds())


///SET


var set = new Date()

set.setMonth(5)

set.setHours(8)

set.setFullYear(2018)

console.log(set)
console.log('')




console.log('                                                 If    If Else    If Elseif Else    Switch')

var a = 89

if (a > 33 && a < 40) {
    console.log('Pass')
} else if (a > 40 && a < 50) {
    console.log('C+')
} else if (a > 50 && a < 60) {
    console.log('B')
} else if (a > 60 && a < 70) {
    console.log('B+')
} else if (a > 70 && a < 80) {
    console.log('A-')
} else if (a > 80 && a < 90) {
    console.log('A')
} else if (a > 90 && a <= 100) {
    console.log('A+')
} else {
    console.log('Fail')
}



var a = 100

switch (true) {
    case (a > 33 && a < 40):
        console.log('Pass')
        break;
    case (a > 40 && a < 50):
        console.log('C+')
        break;
    case (a > 50 && a < 60):
        console.log('B')
        break;
    case (a > 60 && a < 70):
        console.log('B+')
        break;
    case (a > 70 && a < 80):
        console.log('A-')
        break;
    case (a > 80 && a < 90):
        console.log('A')
        break;
    case (a > 90 && a <=100):
        console.log('A+')
        break;
    default:
        console.log('Fail')
}



var spin=Math.floor(Math.random()*20)
console.log(spin)

switch (spin) {
    case 5:
        console.log('Pass')
        break;
    case 10:
        console.log('C+')
        break;
    case 8:
        console.log('B')
        break;
    case 13:
        console.log('B+')
        break;
    case 15:
        console.log('A-')
        break;
    case 19:
        console.log('A')
        break;
    case 17:
        console.log('A+')
        break;
    default:
        console.log('Fail')
}

console.log('')







console.log('                                                 Ternary Operator')

var n=50
var result=n%2===0?'Even':'ODD'
console.log(result)
console.log('')


console.log('                                                 And      OR')

var name=''
var fullname=name||'Ahsan'
console.log('OR : '+fullname)

var isOk=true
isOk && console.log('AND : '+'Yes Ok')