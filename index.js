const prompt = require("prompt-sync")()

// Objeto com categorias e serviços + valores
const servicos = {
    Cabelos: [
        {nome: "Corte", valor: 50},
        {nome: "Tintura", valor: 120},
        {nome: "Escova", valor: 40}
    ],
    MaosEPes: [
        {nome: "Manicure", valor: 30},
        {nome: "Pedicure", valor: 35}
    ],
    EsteticaFacial: [
        {nome: "Limpeza de pele", valor: 80},
        {nome: "Sobrancelhas", valor: 25}
    ],
    Corpo: [
        {nome: "Massagem", valor: 100},
        {nome: "Depilação", valor: 70}
    ],
    Especiais: [
        {nome: "Dia da Noiva", valor: 500},
        {nome: "Consultoria de imagem", valor: 200}
    ]
}

// Array de agendamentos
let agendamentos = []

// Função para listar serviços de uma categoria
function listarServicos(categoria) {
    console.log(`Serviços disponíveis em ${categoria}:`)
    for (let i = 0; i < servicos[categoria].length; i++) {
        console.log(`${i + 1}. ${servicos[categoria][i].nome} - R$${servicos[categoria][i].valor}`)
    }
}

// Função de pagamento
function escolherPagamento(valor) {
    console.log("\nFormas de pagamento:")
    console.log("1. Dinheiro")
    console.log("2. Cartão de crédito")
    console.log("3. Cartão de débito")
    console.log("4. Pix")

    let opcao = parseInt(prompt("Escolha a forma de pagamento: "))
    let forma

    switch (opcao) {
        case 1: forma = "Dinheiro"; break
        case 2: forma = "Cartão de crédito"; break
        case 3: forma = "Cartão de débito"; break
        case 4: forma = "Pix"; break
        default: forma = "Não informado"
    }

    console.log(`Valor a pagar: R$${valor}`)
    let confirmacao = prompt("Pagamento realizado? (s/n): ")

    if (confirmacao.toLowerCase() === "s") {
        return { forma, valor }
    } else {
        console.log("Pagamento não confirmado. Agendamento cancelado.")
        return null
    }
}

// Função para criar agendamento
function criarAgendamento() {
    console.log("\nCategorias:")
    console.log("1. Cabelos")
    console.log("2. Mãos e Pés")
    console.log("3. Estética Facial")
    console.log("4. Corpo")
    console.log("5. Especiais")

    let escolha = parseInt(prompt("Escolha uma categoria: "))
    let categoria

    switch (escolha) {
        case 1: categoria = "Cabelos"; break
        case 2: categoria = "MaosEPes"; break
        case 3: categoria = "EsteticaFacial"; break
        case 4: categoria = "Corpo"; break
        case 5: categoria = "Especiais"; break
        default: 
            console.log("Opção inválida.")
            return
    }

    listarServicos(categoria)
    let servicoEscolhido = parseInt(prompt("Escolha um serviço: "))
    let nomeCliente = prompt("Digite seu nome: ")

    let servico = servicos[categoria][servicoEscolhido - 1]

    // chama função de pagamento
    let pagamento = escolherPagamento(servico.valor)

    if (pagamento) {
        let agendamento = {
            cliente: nomeCliente,
            categoria,
            servico: servico.nome,
            pagamento
        }

        agendamentos.push(agendamento) // adiciona ao array
        console.log(`Agendamento realizado com sucesso para ${nomeCliente}!`)
    }
}

// Função para listar agendamentos
function listarAgendamentos() {
    if (agendamentos.length === 0) {
        console.log("Nenhum agendamento encontrado.")
    } else {
        console.log("\nAgendamentos:")
        for (let i = 0; i < agendamentos.length; i++) {
            let item = agendamentos[i]
            console.log(`${i + 1}. ${item.cliente} - ${item.categoria} - ${item.servico} | Pagamento: ${item.pagamento.forma} - R$${item.pagamento.valor}`)
        }
    }
}

// Função principal (menu)
function menuPrincipal() {
    let continuar = true

    while (continuar) {
        console.log("\nMENU PRINCIPAL")
        console.log("1. Criar agendamento")
        console.log("2. Listar agendamentos")
        console.log("3. Remover último agendamento (pop)")
        console.log("4. Remover primeiro agendamento (shift)")
        console.log("5. Adicionar agendamento no início (unshift)")
        console.log("6. Encerrar programa")

        let escolha = parseInt(prompt("Escolha uma opção: "))

        switch (escolha) {
            case 1:
                criarAgendamento()
                break
            case 2:
                listarAgendamentos()
                break
            case 3:
                agendamentos.pop()
                console.log("Último agendamento removido.")
                break
            case 4:
                agendamentos.shift()
                console.log("Primeiro agendamento removido.")
                break
            case 5:
                let nome = prompt("Digite seu nome: ")
                agendamentos.unshift({cliente: nome, categoria: "Cabelos", servico: "Corte", pagamento:{forma:"Dinheiro", valor:50}})
                console.log(`Agendamento de ${nome} adicionado no início.`)
                break
            case 6:
                continuar = false
                console.log("Programa encerrado.")
                break
            default:
                console.log("Opção inválida.")
        }
    }
}

// Inicia o programa
menuPrincipal()