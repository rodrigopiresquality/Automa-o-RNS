Feature: Consultas de sinistros dos ramos disponíveis
    @focus
    Scenario: Consulta de Sinistro Auto através de um número de sinistro
        Given que o usuário esteja na página Consultar Sinistro
        And escolher o ramo Auto e clicar em Consultar
        When o usuário inserir o número de sinistro no campo Número do Sinistro
        And clicar em Consultar
        Then o sistema retorna as informações do sinistro do ramo Auto

    Scenario: Consulta de Sinistro através de um número de chassi
        Given que o usuário esteja na página Consultar Sinistro
        And escolher o ramo Auto e clicar em Consultar
        When o usuário inserir o número de chassi no campo Chassi
        And clicar em Consultar
        Then o sistema retorna as informações do sinistro do ramo Auto

    Scenario: Consulta de Sinistro através de uma placa
        Given que o usuário esteja na página Consultar Sinistro
        And escolher o ramo Auto e clicar em Consultar
        When o usuário inserir a placa no campo Placa
        And clicar em Consultar
        Then o sistema retorna as informações do sinistro do ramo Auto

    Scenario: Consulta de Sinistro através de um RENAVAM
        Given que o usuário esteja na página Consultar Sinistro
        And escolher o ramo Auto e clicar em Consultar
        When o usuário inserir o RENAVAM no campo RENAVAM
        And clicar em Consultar
        Then o sistema retorna as informações do sinistro do ramo Auto

    Scenario: Consulta de Sinistro através de um CPF
        Given que o usuário esteja na página Consultar Sinistro
        And escolher o ramo Auto e clicar em Consultar
        When o usuário inserir o CPF no campo CPF
        And clicar em Consultar
        Then o sistema retorna as informações do sinistro do ramo Auto

    Scenario: Consulta de Sinistro através de um CNPJ
        Given que o usuário esteja na página Consultar Sinistro
        And escolher o ramo Auto e clicar em Consultar
        When o usuário inserir o CNPJ no campo CNPJ
        And clicar em Consultar
        Then o sistema retorna as informações do sinistro do ramo Auto

    Scenario: Consulta de Sinistro através de uma Matriz CNPJ
        Given que o usuário esteja na página Consultar Sinistro
        And escolher o ramo Auto e clicar em Consultar
        When o usuário inserir a Matriz CNPJ no campo Matriz CNPJ
        And clicar em Consultar
        Then o sistema retorna as informações do sinistro do ramo Auto

    Scenario: Consulta de Sinistro através de um CNPJ de Oficina
        Given que o usuário esteja na página Consultar Sinistro
        And escolher o ramo Auto e clicar em Consultar
        When o usuário inserir o CNPJ de Oficina no campo CNPJ Oficina
        And clicar em Consultar
        Then o sistema retorna as informações do sinistro do ramo Auto

    Scenario: Consulta de Sinistro através de um CPF de um comprador
        Given que o usuário esteja na página Consultar Sinistro
        And escolher o ramo Auto e clicar em Consultar
        When o usuário inserir o CPF do Comprador no campo CPF Comprador
        And clicar em Consultar
        Then o sistema retorna as informações do sinistro do ramo Auto

    Scenario: Consulta de Sinistro através de um CNPJ de um comprador
        Given que o usuário esteja na página Consultar Sinistro
        And escolher o ramo Auto e clicar em Consultar
        When o usuário inserir o CNPJ do Comprador no campo CNPJ Comprador
        And clicar em Consultar
        Then o sistema retorna as informações do sinistro do ramo Auto