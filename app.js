console.clear();
var cartas = [
  {
    nome: "Trollface",
    atributos: {
      Ano: 2008,
      Popularidade: 9,
      Graça: 2
    }
  },

  {
    nome: "Neil deGrasse Tyson",
    atributos: {
      Ano: 2011,
      Popularidade: 7,
      Graça: 3
    }
  },

  {
    nome: "Esquilo Dramático",
    atributos: {
      Ano: 2011,
      Popularidade: 9,
      Graça: 6
    }
  },

  {
    nome: "Doge",
    atributos: {
      Ano: 2010,
      Popularidade: 10,
      Graça: 4
    }
  },

  {
    nome: "Para Nossa Alegria!",
    atributos: {
      Ano: 2012,
      Popularidade: 6,
      Graça: 8
    }
  },

  {
    nome: "Chloe sincera",
    atributos: {
      Ano: 2013,
      Popularidade: 4,
      Graça: 5
    }
  },

  {
    nome: "Rolezeiras",
    atributos: {
      Ano: 2014,
      Popularidade: 7,
      Graça: 9
    }
  },

  {
    nome: "Geovanna do Forninho",
    atributos: {
      Ano: 2013,
      Popularidade: 5,
      Graça: 8
    }
  },

  {
    nome: "Lhe falta Leptospirose",
    atributos: {
      Ano: 2019,
      Popularidade: 3,
      Graça: 9
    }
  },

  {
    nome: "Nazaré confusa",
    atributos: {
      Ano: 2016,
      Popularidade: 10,
      Graça: 6
    }
  },

  {
    nome: "He-Man What's going on",
    atributos: {
      Ano: 2010,
      Popularidade: 5,
      Graça: 9
    }
  },

  {
    nome: "Khaby Lame",
    atributos: {
      Ano: 2020,
      Popularidade: 8,
      Graça: 3
    }
  },

  {
    nome: "Faustão",
    atributos: {
      Ano: 2017,
      Popularidade: 8,
      Graça: 4
    }
  }
];

var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type = 'radio' name = 'atributo' value = '" +
      atributo +
      "'>" +
      atributo;
  }

  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu";
  } else {
    elementoResultado.innerHTML = "Empate";
  }
  console.clear();
  console.log(cartaJogador);
  console.log(cartaMaquina);
  //console.log(cartaJogador.atributos[atributoSelecionado]);
}
