

const displayImg = document.getElementById('displayImg');
let searchKey = document.querySelector('.searchItem');

const button  = document.querySelector('.button')
button.addEventListener('click',getImg)


function getImg(){

  if(searchKey.value == "")
    searchKey.value = genRand()

    event.preventDefault()
    console.log(searchKey.value)
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=cx3I37DCwURBGjGeMOL80WE6URDhD4jG&s='+searchKey.value, {
        mode: 'cors',
      }).then(function (x) {
       return x.json();
      })
      .then(function(x){
        displayImg.src = x.data.images.original.url
        searchKey.value = ""
      })
      .catch(function(){
        console.log('Not')
      })
}

function genRand(){
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

    const randomWord = makeid(randomeNumber);
    return randomWord

}
console.log(genRand())

