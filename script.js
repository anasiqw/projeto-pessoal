const valorCilios = 80;
const valorSobrancelha = 40;
const valorUnha = 50;

let opcao = parseInt(prompt(
  "=== Salão de Beleza ===\n" +
  "1 - Cílios\n" +
  "2 - Sobrancelha\n" +
  "3 - Unha\n" +
  "Escolha uma opção:"
));

let qtd = 0, bruto = 0, liquido = 0, salario = 0;

switch(opcao) {
  case 1:
    qtd = parseInt(prompt("Quantos agendamentos por semana de cílios?"));
    bruto = qtd * 4 * 12 * valorCilios;
    break;

  case 2:
    qtd = parseInt(prompt("Quantos agendamentos por semana de sobrancelha?"));
    bruto = qtd * 4 * 12 * valorSobrancelha;
    break;

  case 3:
    qtd = parseInt(prompt("Quantos agendamentos por semana de unha?"));
    bruto = qtd * 4 * 12 * valorUnha;
    break;

  default:
    alert("Opção inválida!");
}

if (bruto > 0) {
  liquido = bruto * 0.8; // desconta 20% despesas
  salario = liquido / 3; // 3 funcionárias

  alert(
    "Faturamento bruto anual: R$ " + bruto + "\n" +
    "Faturamento líquido anual: R$ " + liquido + "\n" +
    "Salário de cada funcionária: R$ " + salario
  );
}
