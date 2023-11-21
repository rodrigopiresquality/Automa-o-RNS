Feature: Tentativa de login com dados válidos

    Scenario: Efetuando login com dados corretos
        Given que o usuário acesse a página RNS
        When digitar as informações de login e senha
        And clicar em Continuar
        Then a página Home é exibida