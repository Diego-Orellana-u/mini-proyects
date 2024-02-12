export function pickRandomLetters(num){
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let randomLetters = []

    for(let i = 0; i < num; i++){
      const random = Math.floor(Math.random() * letters.length)
      if(randomLetters.includes(letters[random])){
        i--
        continue 
      }
      randomLetters.push(letters[random])
    }
    return randomLetters
  }