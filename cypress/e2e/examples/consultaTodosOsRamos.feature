Feature: Consulta de Sinistro, utilizando a busca em todos os ramos
    @focus
    Scenario: Consulta de Sinistro Todos os Ramos através de um CNPJ
        Given que o usuário esteja na página Consultar Sinistro Todos os Ramos
        And escolher o ramo Todos os Ramos e clicar em Consultar
        When o usuário inserir o número de CNPJ no campo CNPJ Todos os Ramos
        And clicar em Consultar Todos os Ramos
        Then o sistema retorna as informações do sinistro do ramo Todos os Ramos
    
    Scenario: Consulta de Sinistro Todos os Ramos através de um CPF
        Given que o usuário esteja na página Consultar Sinistro Todos os Ramos
        And escolher o ramo Todos os Ramos e clicar em Consultar
        When o usuário inserir o número de CPF no campo CPF Todos os Ramos
        And clicar em Consultar Todos os Ramos
        Then o sistema retorna as informações do sinistro do ramo Todos os Ramos
      
    Scenario: Consulta de Sinistro Todos os Ramos através de um CNPJ inválido
        Given que o usuário esteja na página Consultar Sinistro Todos os Ramos
        And escolher o ramo Todos os Ramos e clicar em Consultar
        When o usuário inserir o número de CNPJ inválido no campo CNPJ Todos os Ramos
        And clicar em Consultar Todos os Ramos
        Then o sistema retorna a informação de que o CNPJ é inválido
  
    Scenario: Consulta de Sinistro Todos os Ramos através de um CPF inválido
        Given que o usuário esteja na página Consultar Sinistro Todos os Ramos
        And escolher o ramo Todos os Ramos e clicar em Consultar
        When o usuário inserir o número de CPF inválido no campo CPF Todos os Ramos
        And clicar em Consultar Todos os Ramos
        Then o sistema retorna a informação de que o CPF é inválido

    Scenario: Tentativa de consulta de sinistro com os campos sem preenchimento
        Given que o usuário esteja na página Consultar Sinistro Todos os Ramos
        And escolher o ramo Todos os Ramos e clicar em Consultar
        When o usuário deixar os filtros necessários para consulta em branco Todos os Ramos
        And clicar em Consultar Todos os Ramos
        Then o sistema retorna a informação de que pelo menos um filtro deve ser preenchido Todos os Ramos