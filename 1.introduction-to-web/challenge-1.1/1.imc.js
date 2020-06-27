const name = "Carlos"
const weight = 84
const height = 1.80
const sex = 'M'

imc = weight / (height * height)

if ( imc >= 30 ) {
    console.log(`${name} you are above the weight, your weight is ${imc.toFixed(2)}`)
} else {
    console.log(`${name} you aren't above the weight, your weight is ${imc.toFixed(2)}.`)
}