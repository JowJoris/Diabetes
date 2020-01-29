var nr = -1;

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
      infoNL: '1',
      infoTK: '1',
      headerNL: '1',
      headerTK: '1'
    }, {
      infoNL: '2',
      infoTK: '2',
      headerNL: '2',
      headerTK: '2'
    }]
  },
  methods: {
    checkCorrectPicture: function(i) {
      if (i == nr++) {
        return true;
      }
      return false;
    }
  },
  pictureClicked: function(i) {
    if (checkCorrectPicture(i)) {
      text.textNL += pictures[i].infoNL;
      text.textTK += pictures[i].infoTK;
      header.nl = pictues[i].headerNL;
      header.tk = pictues[i].headerTK;
      nr++;
    }
  }
})

var text = new Vue({
  el: '#text',
  data: {
    textNL: "",
    textTK: ""
  }
})
