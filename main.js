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
    pictures: [{
      infoNL: 'Welkom bij deze interactieve website met informatie over diabetes. \n' +
      'Ik Ceres Jansen en Dominique de Winter van de opleiding HBO-V willen met behulp van deze site meer informatie verlenen over diabetes',
      infoTK: '1',
      headerNL: 'Klik op de insulinepen',
      headerTK: 'İnsülin kalemine tıklayın'
    }, {
      infoNL: "",
      infoTK: "",
      headerNL: "Klik op het gezonde eten",
      headerTK: "Sağlıklı yiyeceklere tıklayın"
    }]
  },
  methods: {
    checkCorrectPicture: function(i) {
      if (i == nr) {
        return true;
      }
      return false;
    },
    pictureClicked: function(i) {
      if (this.checkCorrectPicture(i)) {
        text.nl += this.pictures[i].infoNL;
        text.tk += this.pictures[i].infoTK;
        header.nl = this.pictures[i].headerNL;
        header.tk = this.pictures[i].headerTK;
        nr = nr+1;
      }
    }
  }
})

var text = new Vue({
  el: '#text',
  data: {
    nl: "testNL",
    tk: "testTK"
  }
})
