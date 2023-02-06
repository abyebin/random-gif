function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

let randomeNumber = Math.floor(getRandomArbitrary(3,8))

export function genRand(){
    const randomWord = makeid(randomeNumber);
    return randomWord
}
