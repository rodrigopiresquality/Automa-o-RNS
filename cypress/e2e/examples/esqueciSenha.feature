Feature: Tentativas de redefinição de senha
    
    Scenario: Acesso a página de recuperação de senha
        Given que o usuário acesse a página RNS
        And o usuário tenha esquecido a senha
        When o usuário clicar na opção Esqueci minha senha
        Then o sistema exibe a tela de recuperação de senha
    
    Scenario: Tentativa de recuperação de senha com e-mail inválido
        Given que o usuário esteja na tela de recuperação de senha
        When o usuário preencher o campo e-mail com um e-mail inválido
        And o usuário clicar no botão Continuar
        Then o sistema retorna mensagem de erro informando que o usuário não foi encontrado
    
    Scenario: Tentativa de recuperação de senha com SUSEP inválido
        Given que o usuário esteja na tela de recuperação de senha
        When o usuário preencher o campo SUSEP com um SUSEP inválido
        And o usuário clicar no botão Continuar
        Then o sistema retorna mensagem de erro informando que o usuário não foi encontrado
    
    Scenario: Tentativa de recuperação de senha com CPF inválido
        Given que o usuário esteja na tela de recuperação de senha
        When o usuário preencher o campo CPF com um CPF inválido
        And o usuário clicar no botão Continuar
        Then o sistema retorna mensagem de erro informando que o usuário não foi encontrado
    
    Scenario: Tentativa de recuperação de senha com todos os dados válidos
        Given que o usuário esteja na tela de recuperação de senha
        When o usuário preencher todos os campos corretamente
        And o usuário clicar no botão Continuar
        Then o sistema envia uma notificação para o e-mail do usuário solicitando confirmação da alteração de senha