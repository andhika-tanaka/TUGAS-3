const prompt = require('prompt-sync')({
    sigint: true
});

var x = prompt('Input nilai x : ')

if (x < 0) {
    console.log('Tidak bisa input Bilangan Negatif')
} else if (x % 2 != 0) {
    console.log("Tidak bisa input Bilangan Ganjil")
} else {
    console.log(Number(Math.sqrt(x)))
}