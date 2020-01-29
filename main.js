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
    pictures: [{
      nr: 1,
      name: 'smiley',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/800px-Smiley.svg.png',
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
    nr: 0,
    textNL: '',
    textTK: ''
  }
})
