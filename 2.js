console.log('PART 2')
console.log('')
console.log('')
console.log('')



console.log('                                                 FOR LOOP')
for (var i = 0; i < 10; i++) {
    console.log((i + 1) + '   ' + 'AHSAN')
}

console.log('')

for (var i = 1; i < 30; i++) {
    if (i % 2 === 0) {
        console.log('ODD NUMBER :' + i)
    }
}
console.log('')


console.log('                                                 While LOOP')

var isRunning = true
while (isRunning) {
    var rand = Math.round(Math.random() * 30)
    if (rand === 12) {
        console.log(rand + '  you got AWM')
        break
    } else if (rand === 19) {
        console.log(rand + '  You got M416')
        break
    } else if (rand === 25) {
        console.log(rand + '  you got AKM')
        break
    } else if (rand === 5) {
        console.log(rand + '  you got UZI')
        break
    } else if (rand === 8) {
        console.log(rand + '  you got UMP45')
        break
    } else {
        console.log(rand + '  you got silver coins')
        break
    }
}
console.log('')
console.log('                                                 DO WHILE LOOP')

var isRunning = false
do {
    var rand = Math.round(Math.random() * 30)
    if (rand === 12) {
        console.log(rand + '  you got AWM')
        break
    } else if (rand === 19) {
        console.log(rand + '  You got M416')
        break
    } else if (rand === 25) {
        console.log(rand + '  you got AKM')
        break
    } else if (rand === 5) {
        console.log(rand + '  you got UZI')
        break
    } else if (rand === 8) {
        console.log(rand + '  you got UMP45')
        break
    } else {
        console.log(rand + '  you got silver coins')
        break
    }
} while (isRunning)
console.log('')


console.log('                                                 NASTED LOOP')

for(var i=1;i<=5; i++){
    for(var j=1; j<=5; j++){
        document.write('*')
    }
    document.write('<br>')
}
console.log('')

console.log('                                                CONTINUE STATEMENT')

for(var i=0;i<=10;i++){
    if(i===5){
        console.log('MATCHED : '+i)
        continue
    }
    console.log(i)
}
console.log('')
console.log('                                             NUMBER TO STRING 2nd')

var str=44
var num=14
var str2=str.toString()

console.log(str+num)
console.log(str2+num)


console.log('')
console.log('                                            STRING LITERAL VS CONSTRUCTOR')

//String Literal
var str='Something'

//String Constructor
var Str=String('Something')

var n=10
var str=n+''
console.log(typeof(str))


console.log('')
console.log('                                            STRING COMPARISON')

var a='b'
var b='a'
console.log(a>b)

console.log('')
console.log('                                             STRING METHODS')

var a='I am'
var b='Ahsan'
var c=a.concat(' '+b)
var d=15

console.log('CONCAT : '+c)
console.log('SUBSTR : '+c.substr(5,3))
console.log('SLICE : '+c.slice(5,7))
console.log('SUBSTRING : '+c.substring(5,7))
console.log('STARTSWITH : '+c.startsWith('I am'))
console.log('ENDSWITH : '+c.endsWith('Ahsan'))
console.log('UPPERCASE : '+c.toUpperCase())
console.log('LOWERCASE : '+c.toLowerCase())
console.log('TRIM : '+'    AUS    '.trim())
console.log('SPLIT : '+c.split(''))
console.log('LENGTH : '+c.length)
console.log('INCLUDES : '+c.includes('am'))
console.log('SEARCH : '+c.search('am'))
console.log('MATCH : '+c.match(/am/g))
console.log('INDEXOF : '+c.indexOf('am'))
console.log('LASTINDEXOF : '+c.lastIndexOf('am'))
console.log('REPLACE : '+c.replace('am','is'))
console.log('CHARAT : '+c.charAt(6))
console.log('CHARCODEAT : '+c.charCodeAt(2))
var mod='A'
console.log('CHARCODEAT : '+mod.charCodeAt())
console.log('FROMCHARCODE : '+String.fromCharCode(65))
console.log('REPEAT : '+c.repeat(6))
console.log('TOSTRING : '+d.toString())
console.log('VALUEOF(default) : '+c.valueOf())


var str="I am nOT A Terrorist"
var length=0
while(true){
    if(str.charAt(length)==''){
        break
    }else{
        length++
    }
}
console.log(length)

console.log('')
console.log('                                             ARRAY')
var arr=[1,2,3,4,5,6]
arr[3]=18
console.log(arr.length)
var arr2=Array(2,4,8,7)
console.log(arr2)


var array=[4,5,8,4,5,58,47,1]
var total=0
for(var i=0;i<array.length;i++){
    total += array[i]
}
console.log(total)

console.log('')
console.log('                                             ARRAY Methods')
var a=['A','S','N','A','H']
console.log(a)
a.pop()
console.log('POP : '+a)
a.push('K')
console.log('PUSH : '+a)
a.shift()
console.log('SHIFT : '+a)
a.unshift('S')
console.log('UNSHIFT : '+a)


var b=['S','H','A','K','I','L']
var d=['A','U','S']
console.log('CONCAT : '+a.concat(b,d))


console.log('JOIN : '+a.join('-'))

console.log('SLICE : '+a.slice(1,4))
a.splice(2,0,'P','A')
console.log('SPLICE : '+a)

var l=Array.isArray(a)
console.log('ISARRAY : '+l)

console.log('INDEXOF : '+a.indexOf('A'))
console.log('LAST INDEX OF : '+a.lastIndexOf('A'))

console.log('INCLUDES : '+a.includes('N'))

var ages=[15,28,19,22,14,13,17]
function CheckAdult(age){
    return age>=18
}

console.log('SOME : '+ages.some(CheckAdult))
console.log('EVERY : '+ages.every(CheckAdult))
console.log('FIND : '+ages.find(CheckAdult))
console.log('FINDINDEX : '+ages.findIndex(CheckAdult))
console.log('FILTER : '+ages.filter(CheckAdult))
console.log('TOSTRING : '+ages.toString())
console.log('VALUEOF (default) : '+a.valueOf())
console.log('FILL : '+a.fill('GOOD'))
var arr10=Array.from(d)
console.log('FROM : '+arr10)


console.log('')
console.log('                                           SEARCH VALUE IN ARRAY')

var arr=[4,7,8,6,5,1,3,2,9,24,15,78]
var find=10
var isFound=false
for (var i=0; i<arr.length; i++){
    if (arr[i]===find){
        console.log('DATA FOUND '+i)
        isFound=true
        break;
    }
}
if(!isFound){
    console.log('DATA NOT FOUND')
}


console.log('')
console.log('                                           MULTIDIMENSIONAL ARRAY')

var arr=[[78,79,80,81],
         [15,16,17,18],
         [45,46,47,48]   
        ]

for(var i=0;i<arr.length;i++){
    for (var j=0;j<arr[i].length;j++){
        console.log('ELEMENT'+i+':'+arr[i][j])
    }
}


console.log('')
console.log('                                           REVERSE AN ARRAY')

var arr=[1,2,3,4,5,6,7,8,9]
for(var i=0;i<(arr.length/2);i++){
    var temp=arr[i]
    arr[i]=arr[arr.length-1-i]
    arr[arr.length-1-i]=temp
}
console.log(arr)