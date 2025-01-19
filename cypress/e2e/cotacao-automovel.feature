# utf-8
# language: pt

Funcionalidade: Enviar cotacao de seguro para automovel
    Cenário: Inserir dados do veículo e enviar cotacao
        Dado que acesso o portal Tricentis
        Quando clico na opção Automobile Insurance
        E preencho todos os dados do automóvel corretamente
  	    E clico no botão next para navegar para a pagina de dados do seguro
        E preencho todos os dados do seguro corretamente
        E clico no botão next para navegar para a pagina de produto
        E preencho todos os dados do produto corretamente
        E clico no botão next para navegar para a pagina de preco
        E seleciono a opcao de preco desejado
        E clico no botão next para navegar para a pagina de enviar cotacao
        E preencho todos os dados pessoais corretamente
        E clico no botão send para enviar a cotacao
        Entao uma mensagem de sucesso aparece na tela
        