Feature: Consulta de Sinistro do ramo Patrimonial, utilizando os filtros disponíveis
    
    Scenario: Consulta de Sinistro Patrimonial através de um CNPJ
        Given que o usuário esteja na página Consultar Sinistro Patrimonial
        And escolher o ramo Patrimonial e clicar em Consultar
        When o usuário inserir o número de CNPJ no campo CNPJ Patrimonial
        And clicar em Consultar Patrimonial
        Then o sistema retorna as informações do sinistro do ramo Patrimonial
    
    Scenario: Consulta de Sinistro Patrimonial através de um CPF
        Given que o usuário esteja na página Consultar Sinistro Patrimonial
        And escolher o ramo Patrimonial e clicar em Consultar
        When o usuário inserir o número de CPF no campo CPF Patrimonial
        And clicar em Consultar Patrimonial
        Then o sistema retorna as informações do sinistro do ramo Patrimonial
    
    Scenario: Consulta de Sinistro Patrimonial através de um endereço de ocorrência
        Given que o usuário esteja na página Consultar Sinistro Patrimonial
        And escolher o ramo Patrimonial e clicar em Consultar
        When o usuário inserir o CEP e o número nos campos CEP e Número do endereço de ocorrência Patrimonial
        And clicar em Consultar Patrimonial
        Then o sistema retorna as informações do sinistro do ramo Patrimonial
    
    Scenario: Consulta de Sinistro Patrimonial através do endereço do segurado
        Given que o usuário esteja na página Consultar Sinistro Patrimonial
        And escolher o ramo Patrimonial e clicar em Consultar
        When o usuário inserir o CEP e o número nos campos CEP e Número do endereço do segurado Patrimonial
        And clicar em Consultar Patrimonial
        Then o sistema retorna as informações do sinistro do ramo Patrimonial

    Scenario: Consulta de Sinistro Patrimonial através de uma matriz CNPJ
        Given que o usuário esteja na página Consultar Sinistro Patrimonial
        And escolher o ramo Patrimonial e clicar em Consultar
        When o usuário inserir o número da matriz CNPJ no campo Matriz CNPJ Patrimonial
        And clicar em Consultar Patrimonial
        Then o sistema retorna as informações do sinistro do ramo Patrimonial

    Scenario: Tentativa de consulta de sinistro com os campos sem preenchimento
        Given que o usuário esteja na página Consultar Sinistro Patrimonial
        And escolher o ramo Patrimonial e clicar em Consultar
        When o usuário deixar os filtros necessários para consulta em branco Patrimonial
        And clicar em Consultar Patrimonial
        Then o sistema retorna a informação de que pelo menos um filtro deve ser preenchido