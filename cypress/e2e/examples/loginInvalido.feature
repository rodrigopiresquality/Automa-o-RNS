Feature: Tentativas de login com dados inválidos

    Scenario: Efetuando login com senha incorreta
        Given que o usuário acesse a página RNS
        When digitar a senha incorreta
        And clicar em Continuar
        Then uma mensagem de erro de senha deve ser exibida

    Scenario: Efetuando login com nome de usuário incorreto
        Given que o usuário acesse a página RNS
        When digitar o nome de usuário incorreto
        And clicar em Continuar
        Then uma mensagem de erro de usuário deve ser exibida