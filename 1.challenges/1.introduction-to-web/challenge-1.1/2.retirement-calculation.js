const name = 'Juliana'
const sex = 'F'
const age = 68
const contribution = 35

const calcContribution = age + contribution

const manCanRetire = sex === 'M' && contribution >= 35 && calcContribution >= 95
const womanCanRetire = sex === 'F' && contribution >= 30 && calcContribution >= 85

if ( manCanRetire || womanCanRetire ) {
    console.log(`${name}, you can retire!`)
} else {
    console.log(`${name}, you can't retire!`)
}