Feature: Consulta de Sinistro do ramo Rural, utilizando os filtros disponíveis
    
    Scenario: Consulta de Sinistro Rural através de um número de sinistro
        Given que o usuário esteja na página Consultar Sinistro Rural
        And escolher o ramo Rural e clicar em Consultar
        When o usuário inserir o número de sinistro no campo Número do Sinistro Rural
        And clicar em Consultar Rural
        Then o sistema retorna as informações do sinistro do ramo Rural
    
    Scenario: Consulta de Sinistro através de um tipo de cultura
        Given que o usuário esteja na página Consultar Sinistro Rural
        And escolher o ramo Rural e clicar em Consultar
        When o usuário inserir o tipo de cultura no campo Tipo de Cultura Rural
        And clicar em Consultar Rural
        Then o sistema retorna as informações do sinistro do ramo Rural
    
    Scenario: Consulta de Sinistro através de uma UF
        Given que o usuário esteja na página Consultar Sinistro Rural
        And escolher o ramo Rural e clicar em Consultar
        When o usuário inserir a UF e o município nos campos UF e Município Rural
        And clicar em Consultar Rural
        Then o sistema retorna as informações do sinistro do ramo Rural
    
    Scenario: Consulta de Sinistro através de um tipo de documento
        Given que o usuário esteja na página Consultar Sinistro Rural
        And escolher o ramo Rural e clicar em Consultar
        When o usuário inserir o documento no campo Tipo de Documento Rural
        And clicar em Consultar Rural
        Then o sistema retorna as informações do sinistro do ramo Rural
    
    Scenario: Tentativa de consulta de sinistro com os campos sem preenchimento
        Given que o usuário esteja na página Consultar Sinistro Rural
        And escolher o ramo Rural e clicar em Consultar
        When o usuário deixar os filtros necessários para consulta em branco Rural
        And clicar em Consultar Rural
        Then o sistema retorna a informação de que pelo menos um filtro deve ser preenchido