const prompt=require('prompt-sync')();

const estacao = {
  id: "Sensor-01",
  local: "Laboratório",
  temperaturas: []
};

estacao.temperaturas.push
(Number(prompt("digite a 1º temperatura:")));

estacao.temperaturas.push
(Number(prompt("digite a 2º temperatura:")));

estacao.temperaturas.push
(Number(prompt("digite a 3º temperatura:")));

let media=
(estacao.temperaturas[0]+
 estacao.temperaturas[1]+
 estacao.temperaturas[2]) /3;
if(media>35) {
  estacao.alerta=true;
  console.log("PERIGO:media detectada no [local]!")

}else{
estacao.alerta=false;
console.log("temperaturas dentro da normalidade.");

}





 




 






