Feature: Consulta de Sinistro do ramo Transporte, utilizando os filtros disponíveis
    
    Scenario: Consulta de Sinistro Transporte através de um número de sinistro
        Given que o usuário esteja na página Consultar Sinistro Transporte
        And escolher o ramo Transporte e clicar em Consultar
        When o usuário inserir o número de sinistro no campo Número do Sinistro Transporte
        And clicar em Consultar Transporte
        Then o sistema retorna as informações do sinistro do ramo Transporte

    Scenario: Consulta de Sinistro através de um número de chassi
        Given que o usuário esteja na página Consultar Sinistro Transporte
        And escolher o ramo Transporte e clicar em Consultar
        When o usuário inserir o número de chassi no campo Chassi Transporte
        And clicar em Consultar Transporte
        Then o sistema retorna as informações do sinistro do ramo Transporte

    Scenario: Consulta de Sinistro através de uma placa
        Given que o usuário esteja na página Consultar Sinistro Transporte
        And escolher o ramo Transporte e clicar em Consultar
        When o usuário inserir a placa no campo Placa Transporte
        And clicar em Consultar Transporte
        Then o sistema retorna as informações do sinistro do ramo Transporte

    Scenario: Consulta de Sinistro através de um RENAVAM
        Given que o usuário esteja na página Consultar Sinistro Transporte
        And escolher o ramo Transporte e clicar em Consultar
        When o usuário inserir o RENAVAM no campo RENAVAM Transporte
        And clicar em Consultar Transporte
        Then o sistema retorna as informações do sinistro do ramo Transporte

    Scenario: Consulta de Sinistro através de um CPF
        Given que o usuário esteja na página Consultar Sinistro Transporte
        And escolher o ramo Transporte e clicar em Consultar
        When o usuário inserir o CPF no campo CPF Transporte
        And clicar em Consultar Transporte
        Then o sistema retorna as informações do sinistro do ramo Transporte

    Scenario: Consulta de Sinistro através de um CNPJ
        Given que o usuário esteja na página Consultar Sinistro Transporte
        And escolher o ramo Transporte e clicar em Consultar
        When o usuário inserir o CNPJ no campo CNPJ Transporte
        And clicar em Consultar Transporte
        Then o sistema retorna as informações do sinistro do ramo Transporte

    Scenario: Consulta de Sinistro através de uma Matriz CNPJ
        Given que o usuário esteja na página Consultar Sinistro Transporte
        And escolher o ramo Transporte e clicar em Consultar
        When o usuário inserir a Matriz CNPJ no campo Matriz CNPJ Transporte
        And clicar em Consultar Transporte
        Then o sistema retorna as informações do sinistro do ramo Transporte

    Scenario: Consulta de Sinistro através de um intervalo de data de cadastro
        Given que o usuário esteja na página Consultar Sinistro Transporte
        And escolher o ramo Transporte e clicar em Consultar
        When o usuário inserir o intervalo de data de cadastro nos campos Data de Cadastro Início e Data de Cadastro Fim Transporte
        And clicar em Consultar Transporte
        Then o sistema retorna as informações do sinistro do ramo Transporte

    Scenario: Consulta de Sinistro através de um intervalo de data de ocorrência
        Given que o usuário esteja na página Consultar Sinistro Transporte
        And escolher o ramo Transporte e clicar em Consultar
        When o usuário inserir o intervalo de data de ocorrência nos campos Data de Ocorrência Início e Data de Ocorrência Fim Transporte
        And clicar em Consultar Transporte
        Then o sistema retorna as informações do sinistro do ramo Transporte

    Scenario: Tentativa de consulta de sinistro com os campos sem preenchimento
        Given que o usuário esteja na página Consultar Sinistro Transporte
        And escolher o ramo Transporte e clicar em Consultar
        When o usuário deixar os filtros necessários para consulta em branco Transporte
        And clicar em Consultar Transporte
        Then o sistema retorna a informação de que pelo menos um filtro deve ser preenchido