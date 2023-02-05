const displayImg = document.getElementById('displayImg');
let searchKey = document.querySelector('.searchItem');

if(searchKey.value == ""){
    searchKey.value = "what are you looking at"
}else
searchKey = searchKey.value;

const button  = document.querySelector('.button')
button.addEventListener('click',getImg)


function getImg(){
    event.preventDefault()
    console.log(searchKey.value)
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=cx3I37DCwURBGjGeMOL80WE6URDhD4jG&s='+searchKey.value, {
        mode: 'cors',
      }).then(function (x) {
       return x.json();
      })
      .then(function(x){
        displayImg.src = x.data.images.original.url
      })
}

