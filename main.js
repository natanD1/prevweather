const key = "99f24de540089be5b97742f7162590a2"

function colocarDadosNaTela(dados){
  document.querySelector(".title-city").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".text-temp").innerHTML = Math.floor(dados.main.temp) + "ºC";
  document.querySelector(".text-prev").innerHTML = dados.weather[0].description;
  document.querySelector(".text-umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
  document.querySelector(".img-temp").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta =>resposta.json());

  colocarDadosNaTela(dados)
}

function cliqueiNoBotao(){
  const cidade = document.querySelector(".input-text").value;

  buscarCidade(cidade);
}
