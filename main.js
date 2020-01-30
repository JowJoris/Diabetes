var nr = 0;

var header = new Vue({
  el: '#header',
  data: {
    nl: "Welkom bij deze uitleg over diabetes<br>Klik op de Smiley om te beginnen",
    tk: "Diyabet hakkındaki bu açıklamaya hoş geldiniz<br>Başlamak için Smiley'ye tıklayın"
  }
})

var pictures = new Vue({
  el: '#pictures',
  data: {
    pictures: [{
        infoNL: "Welkom bij deze interactieve website met informatie over diabetes.<br>" +
          "Wij, Ceres Jansen en Dominique de Winter, van de opleiding HBO-V willen met behulp van deze site meer informatie verlenen over diabetes.<br><br>" +
          "Bovenaan de pagina zal worden aangegeven op welke volgende afbeelding dient te worden geklikt.<br>" +
          "Wanneer er op de juiste afbeelding geklikt is zal onder de afbeeldingen uitleg worden gegeven over de geklikte afbeelding<br><br>",
        infoTK: "",
        headerNL: 'Klik op de insulinepen',
        headerTK: 'İnsülin kalemine tıklayın'
      }, {
        infoNL: "Was je altijd eerst je handen.<br>" +
          "Is de insuline troebel, beweeg hem ongeveer twintig keer rustig heen en weer, totdat er een 'egale' insuline ontstaat. Niet schudden!<br>" +
          "Spuit met één à twee eenheden de lucht in de naald weg.<br>" +
          "Stel de hoeveelheid insuline in en controleer dit nogmaals.<br>" +
          "Plaats de pen loodrecht op de huid. Zo kun je nauwkeurig bepalen waar de insuline terechtkomt. Een huidplooi vastpakken is niet nodig.<br>" +
          "Houd de pen met de hand vast en druk met de duim op de knop. Houd de naald zo stil mogelijk, om alle insuline in het lichaam terecht te laten komen.<br>" +
          "Laat het naaldje na het spuiten altijd nog minimaal tien seconden in de huid zitten.<br>" +
          "Lekt er nog wat insuline nadat de pen is teruggetrokken, houd dan je glucosewaarden in de gaten.<br>" +
          "Vervang het naaldje na iedere prikbeurt. Dit voorkomt huidschade en het is minder pijnlijk.<br><br>",
        infoTK: "",
        headerNL: "Klik op het ongezonde eten",
        headerTK: ""
      },
      {
        infoNL: "Onze hersenen bepalen wat we lekker vinden en voldoening uithalen. De smaak is zeer belangrijk en deze word opgepikt in de hersenen. De producten die rijk aan suiker zijn en als zoet worden ervaren,  geven de meeste voldoening. Producten die vetten bevatten zijn ook erg gewild door de hersenen, deze geven allemaal voldoening dus ook voor jezelf.<br><br>",
        infoTK: "",
        headerNL: "Klik op het gezonde eten",
        headerTK: ""
      },
      {
        infoNL: "Onbewerkt dierlijk- en plantaardig voedsel bevat grote hoeveelheden vitamines en mineralen. Deze heb je nodig om je lichaam optimaal te laten functioneren, dus uiteindelijk voor een goede gezondheid. Niet alleen de lichamelijke gezondheid, maar juist ook de geestelijke gezondheid.<br><br>",
        infoTK: "",
        headerNL: "Wat is een hypo?",
        headerTK: ""
      },
      {
        infoNL: "Je kunt zelf je bloedglucosewaarden verhogen met snelwerkende koolhydraten, als je een hypo voelt aankomen. Voorbeelden van snelwerkende koolhydraten zijn:<br><br>" +
          "druivensuiker<br>" +
          "frisdrank (geen light)<br>" +
          "limonadesiroop (geen light)<br>" +
          "candybars<br>" +
          "energyrepen<br><br>" +
          "Je lichaam heeft na een hypo tijd nodig om te herstellen. Dit kan tot 24 uur duren.<br><br>",
        infoTK: "",
        headerNL: "Wat is een hyper?",
        headerTK: ""
      },
      {
        infoNL: "Als je insuline gebruikt, geef een dosis insuline. Overleg met je zorgverlener hoeveel je bijspuit of bijbolust bij hoge waardes. Daar zijn schema’s voor. Is je bloedglucosewaarde onder 15 mmol/l? Ga bewegen! Hierdoor daalt de glucose in je bloed. Ga niet bewegen als je bloedglucosewaarde boven 15 mmol/l zit, dan is er kans dat je bloedglucosewaarde stijgt. Ga je braken, waarschuw dan een arts. Water drinken voorkomt mogelijke uitdroging bij een hyper.<br><br>",
        infoTK: "",
        headerNL: "Wat kun je doen bij overgewicht?",
        headerTK: ""
      },
      {
        infoNL: "Samen met uw huisarts of praktijkondersteuner bespreekt u hoe u uw leefstijl kunt verbeteren. De aanpak bestaat uit een combinatie van:<br><br>" +
          "gezonder eten<br>" +
          "meer bewegen<br>" +
          "omgaan met dingen die invloed hebben op uw leefstijl, zoals problemen en stress.",
          infoTK: "",
          headerNL: "",
          headerTK: ""
      }
    ]
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
        nr = nr + 1;
      }
    }
  }
})

var text = new Vue({
  el: '#text',
  data: {
    nl: "",
    tk: ""
  }
})
