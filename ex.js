var a='I am Not am GOOD OkaY'
var b='Yes OKAY Bro'
var c=15

console.log(a.concat(' : '+b))
console.log(c+18)
console.log(c.toString()+18)
console.log(a.indexOf('am'))
console.log(a.lastIndexOf('am'))
console.log(a.startsWith('I'))
console.log(a.endsWith('aY'))
console.log(a.toLowerCase())
console.log(a.toUpperCase())
console.log(a.includes('Not'))
console.log(a.search('GOOD'))
console.log(a.match(/am/g))
console.log(a.slice(5,11))
console.log(a.substr(5,3))
console.log(a.substring(5,15))
console.log(a.charAt(5))
console.log(a.charCodeAt(5))
console.log(String.fromCharCode(65))
console.log('   ammm   ')
console.log('   ammm   '.trim())
console.log(a.length)
console.log(a.repeat(2))
console.log(a.replace('Not','YES'))
console.log(a.split(''))
console.log(a.valueOf())




console.log('NUMBER')

var a='18'
var b=15.254

console.log(Number(a)+12)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.isFinite(b))
console.log(Number.isInteger(b))
console.log(parseInt(b))
console.log(parseFloat(b))
console.log(b.toPrecision(3))
console.log(b.toFixed(3))



console.log('MATH')

console.log(Math.E)
console.log(Math.PI)
console.log(Math.pow(2,3))
console.log(Math.sqrt(4))
console.log(Math.cbrt(8))
console.log(Math.ceil(4.25))
console.log(Math.round(4.4))
console.log(Math.floor(4.6))
console.log(Math.trunc(8.55))
console.log(Math.random())
console.log(Math.max(5,8,7,13,5,44,88,99,78))
console.log(Math.min(5,8,7,13,5,44,88,99,78))
console.log(Math.abs(-45.56))