var nr = 0;

var header = new Vue({
  el: '#header',
  data: {
    nl: "Welkom bij deze uitleg over diabetes \n klik op de Smiley om te beginnen",
    tk: "Diyabet hakkındaki bu açıklamaya hoş geldiniz \n başlamak için Smiley'ye tıklayın"
  }
})

var pictures = new Vue({
  el: '#pictures',
  data: {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/800px-Smiley.svg.png',
    pictures: [{
      nr: 1,
      name: 'smiley',
      infoNL: '',
      infoTK: '',
      headerNL: '',
      headerTK: ''
    }, {
      nr: 2,
      name: 'insulinepen',
      img: 'https://www.diabetescentrale.nl/sites/default/files/styles/product_full/public/products/novopen_5_-_grijs.jpg?itok=OqOBqbap',
      infoNL: '',
      infoTK: '',
      headerNL: '',
      headerTK: ''
    }]
  }
})

var text = new Vue({
  el: '#text',
  data: {
    textNL: '',
    textTK: ''
  }
})

function pictureClicked(i){
  if(checkCorrectPicture(i)){
    text.textNL += pictures[i].infoNL;
    text.textTK += pictures[i].infoTK;
  }
}

function checkCorrectPicture(i){
 if(i == nr){
   return true;
 }
 return false;
}
