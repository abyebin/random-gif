const displayImg = document.getElementById('displayImg');
const searchKey = document.querySelector('.searchItem').value;
const button  = document.querySelector('.button')

button.addEventListener('click',getImg)


function getImg(){
    console.log(searchKey)
    event.preventDefault()
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=cx3I37DCwURBGjGeMOL80WE6URDhD4jG&s='+"cats", {
        mode: 'cors',
      }).then(function (x) {
       return x.json();
      })
      .then(function(x){
        console.log(x)
      })
}

