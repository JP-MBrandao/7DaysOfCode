let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (Number(stringUm) === Number(numeroUm) && typeof(stringUm) != typeof(numeroUm)) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (Number(stringTrinta) === Number(numeroTrinta) && typeof(stringTrinta) === typeof(numeroTrinta)) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else if (Number(stringTrinta) === Number(numeroTrinta) && typeof(stringTrinta) != typeof(numeroTrinta)){
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
} else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo e nem mesmo valor')
  } 
  

if (Number(stringDez) === Number(numeroDez) && typeof(stringDez) != typeof(numeroDez)) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
