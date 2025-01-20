const BTN_AUTOMOVEL = '#nav_automobile'
const SELECT_MARCA_VEICULO = '#make'
const INPUT_ENGINE_PERFORMANCE = '#engineperformance'
const INPUT_DATA_MANUFATURA = '#dateofmanufacture'
const SELECT_NUMERO_ASSENTOS_CARRO = '#numberofseats'
const SELECT_TIPO_COMBUSTIVEL = '#fuel'
const INPUT_PRECO_TABELA = '#listprice'
const INPUT_KM_ANUAL = '#annualmileage'
const BTN_NEXT_SEGURO = '#nextenterinsurantdata'

const INPUT_PRIMEIRO_NOME = '#firstname'
const INPUT_ULTIMO_NOME = '#lastname'
const INPUT_DATA_NASCIMENTO = '#birthdate'
const INPUT_PAIS = '#country'
const INPUT_CEP = '#zipcode'
const INPUT_OCUPACAO = '#occupation'
const BTN_NEXT_PRODUTO = '#nextenterproductdata'

const INPUT_DATA_INICIO = '#startdate'
const SELECT_SOMA_SEGURO = '#insurancesum'
const SELECT_CLASS_MERITO = '#meritrating'
const SELECT_SEGURO_DANOS = '#damageinsurance'
const SELECT_PRODUTOS_OPCIONAIS = ''
const SELECT_CARRO_CORTESIA = '#courtesycar'
const BTN_NEXT_PRECO = '#nextselectpriceoption'
const BTN_NEXT_COTACAO = '#nextsendquote'
const BTN_SEND = '#sendemail'

Given('que acesso o portal Tricentis', () => {
    cy.visit('https://sampleapp.tricentis.com/101/app.php')
})
 
When('clico na opção Automobile Insurance', () => {
    cy.clicar(BTN_AUTOMOVEL)
})

And('preencho todos os dados do automóvel corretamente', () => {
    cy.selecionar(SELECT_MARCA_VEICULO, 'Audi')
    cy.digitar(INPUT_ENGINE_PERFORMANCE, '500')
    cy.digitar(INPUT_DATA_MANUFATURA, '12/12/2020')
    cy.selecionar(SELECT_NUMERO_ASSENTOS_CARRO, '4')
    cy.selecionar(SELECT_TIPO_COMBUSTIVEL, 'Diesel')
    cy.digitar(INPUT_PRECO_TABELA, '20000')
    cy.digitar(INPUT_KM_ANUAL, '5000')
})

And('clico no botão next para navegar para a pagina de dados do seguro', () => {
    cy.clicar(BTN_NEXT_SEGURO)
})

And('preencho todos os dados do seguro corretamente', () => {
    cy.digitar(INPUT_PRIMEIRO_NOME, Cypress.env('FIRSTNAME'))
    cy.digitar(INPUT_ULTIMO_NOME, Cypress.env('LASTNAME'))
    cy.digitar(INPUT_DATA_NASCIMENTO, '09/20/1996')
    cy.selecionar(INPUT_PAIS, 'Brazil')
    cy.digitar(INPUT_CEP, '51130300')
    cy.selecionar(INPUT_OCUPACAO, 'Employee')
    cy.marcar('Speeding')
    cy.marcar('BungeeJumping')
})

And('clico no botão next para navegar para a pagina de produto', () => {
    cy.clicar(BTN_NEXT_PRODUTO)
})

And('preencho todos os dados do produto corretamente', () => {
    cy.digitar(INPUT_DATA_INICIO, '12/10/2027')
    cy.selecionar(SELECT_SOMA_SEGURO, '3000000')
    cy.selecionar(SELECT_CLASS_MERITO, 'Bonus 1')
    cy.selecionar(SELECT_SEGURO_DANOS, 'Partial Coverage')
    cy.marcar('Yes')
    cy.selecionar(SELECT_CARRO_CORTESIA, 'Yes')
})

And('clico no botão next para navegar para a pagina de preco', () => {
    cy.clicar(BTN_NEXT_PRECO)
})

And('seleciono a opcao de preco desejado', () => {
    cy.marcar('Ultimate')
})

And('clico no botão next para navegar para a pagina de enviar cotacao', () => {
    cy.clicar(BTN_NEXT_COTACAO)
})

And('preencho todos os dados pessoais corretamente', () => {
    cy.digitar('#email', Cypress.env('EMAIL'))
    cy.digitar('#username', Cypress.env('USERNAME'))
    cy.digitar('#password', Cypress.env('PASSWORD'))
    cy.digitar('#confirmpassword', Cypress.env('PASSWORD'))
})

And('clico no botão send para enviar a cotacao', () => {
    cy.clicar(BTN_SEND)
})

Then('uma mensagem de sucesso aparece na tela', () => {
    cy.validaMensagem('.sa-success')
})

//Scenario 2 - Senha invalida

And('preencho todos os dados pessoais com uma senha incorreta', () => {
    cy.digitar('#email', Cypress.env('EMAIL'))
    cy.digitar('#username', Cypress.env('USERNAME'))
    cy.digitar('#password', Cypress.env('PASSWORD'))
    cy.digitar('#confirmpassword', 'SenhaErrada123*')
})

Then('uma mensagem de erro aparece na tela', () => {
    cy.validaMensagem('.sweet-alert')
})