Feature: Consulta de Sinistro do ramo Créditos e Garantias, utilizando os filtros disponíveis
    
    Scenario: Consulta de Sinistro Créditos e Garantias através de um CNPJ
        Given que o usuário esteja na página Consultar Sinistro Créditos e Garantias
        And escolher o ramo Créditos e Garantias e clicar em Consultar
        When o usuário inserir o número de CNPJ no campo CNPJ Créditos e Garantias
        And clicar em Consultar Créditos e Garantias
        Then o sistema retorna as informações do sinistro do ramo Créditos e Garantias
    
    Scenario: Consulta de Sinistro Créditos e Garantias através de um CPF
        Given que o usuário esteja na página Consultar Sinistro Créditos e Garantias
        And escolher o ramo Créditos e Garantias e clicar em Consultar
        When o usuário inserir o número de CPF no campo CPF Créditos e Garantias
        And clicar em Consultar Créditos e Garantias
        Then o sistema retorna as informações do sinistro do ramo Créditos e Garantias
    
    Scenario: Consulta de Sinistro Créditos e Garantias através de um número de sinistro
        Given que o usuário esteja na página Consultar Sinistro Créditos e Garantias
        And escolher o ramo Créditos e Garantias e clicar em Consultar
        When o usuário inserir o número do sinistro no campo Número do Sinistro Créditos e Garantias
        And clicar em Consultar Créditos e Garantias
        Then o sistema retorna as informações do sinistro do ramo Créditos e Garantias
    
    Scenario: Consulta de Sinistro Créditos e Garantias através do nome do segurado
        Given que o usuário esteja na página Consultar Sinistro Créditos e Garantias
        And escolher o ramo Créditos e Garantias e clicar em Consultar
        When o usuário inserir o nome do segurado no campo Nome do Segurado Créditos e Garantias
        And clicar em Consultar Créditos e Garantias
        Then o sistema retorna as informações do sinistro do ramo Créditos e Garantias

    Scenario: Tentativa de consulta de sinistro com os campos sem preenchimento
        Given que o usuário esteja na página Consultar Sinistro Créditos e Garantias
        And escolher o ramo Créditos e Garantias e clicar em Consultar
        When o usuário deixar os filtros necessários para consulta em branco Créditos e Garantias
        And clicar em Consultar Créditos e Garantias
        Then o sistema retorna a informação de que pelo menos um filtro deve ser preenchido