const text = 'Anita lava la tina'

function palindromo(palabra) {
    palabra = palabra.replaceAll(" ","")
    palabra = palabra.toLowerCase()
    palabra2 = palabra.split("")
  
    let isPalindromo = palabra === palabra2.reverse().join('')
  
    if (!isPalindromo) {
      console.log("No es un palindromo")
      
      
    }
    else{
      console.log("Si es un palindromo")
     
    }
  }

  palindromo(text)