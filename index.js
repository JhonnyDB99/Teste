const turista = prompt("Eai turista! Qual o seu nome ?");
let cidades = " ";
let contagem = 0;

let continuar = prompt("VC VISITOU ALGUMA CIDADE ? SIM/NÃO");

while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada ?");
  // cidades = cidades  +...
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Vc visitou alguma outra cidade? Sim/Não ?");
}

alert(
  "Turista: " +
    turista +
    "\nQuantidade de cidades visitadas: " +
    contagem +
    "\nCidades visitadas:\n" +
    cidades
);
