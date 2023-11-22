import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import loginInvalido from "../pages/loginInvalido"
import loginValido from "../pages/loginValido"
import esqueciSenha from "../pages/esqueciSenha"
import consultaSinistroAuto from "../pages/consultaSinistroAuto"

beforeEach(() => {
    cy.viewport(1920, 1080)
})

// Início dos elementos dos testes "loginValido.feature" e "loginInvalido.feature".
Given("que o usuário acesse a página RNS", () => {
    loginInvalido.homePage()
})
When("digitar a senha incorreta", () => {
    loginValido.formEmail()
    loginInvalido.formInvPassword()
})
When("digitar o nome de usuário incorreto", () => {
    loginInvalido.formInvEmail()
    loginValido.formPassword()
})
When("digitar as informações de login e senha", () => {
    loginValido.formEmail()
    loginValido.formPassword()
})
And("clicar em Continuar", () => {
    loginInvalido.loginButton()
})
Then("uma mensagem de erro de senha deve ser exibida", () => {
    loginInvalido.mensagemErroSenha()
})
Then("uma mensagem de erro de usuário deve ser exibida", () => {
    loginInvalido.mensagemErroEmail()
})
Then("a página Home é exibida", () => {
    loginValido.mensagemConfirmacao()
})
// Fim dos elementos dos testes "loginValido.feature" e "loginInvalido.feature".

//Início dos elementos do teste "esqueciSenha.feature".
Given("que o usuário acesse a página RNS", () => {
    loginValido.homePage()
})
And("o usuário tenha esquecido a senha", () => {})
When("o usuário clicar na opção Esqueci minha senha", () => {
    esqueciSenha.forgotPassword()
})
Then("o sistema exibe a tela de recuperação de senha", () => {
    esqueciSenha.recoveryScreen()
})
Given("que o usuário esteja na tela de recuperação de senha", () => {
    esqueciSenha.redefinir()
})
When("o usuário preencher o campo e-mail com um e-mail inválido", () => {
    esqueciSenha.formEmailRecInv()
    esqueciSenha.formSusep()
    esqueciSenha.formCpf()
})
When("o usuário preencher o campo SUSEP com um SUSEP inválido", () => {
    esqueciSenha.formEmailRec()
    esqueciSenha.formSusepInv()
    esqueciSenha.formCpf()
})
When("o usuário preencher o campo CPF com um CPF inválido", () => {
    esqueciSenha.formEmailRec()
    esqueciSenha.formSusep()
    esqueciSenha.formCpfInv()
})
When("o usuário preencher todos os campos corretamente", () => {
    esqueciSenha.formEmailRec()
    esqueciSenha.formSusep()
    esqueciSenha.formCpf()
})
And("o usuário clicar no botão Continuar", () => {
    esqueciSenha.botaoCont()
})
Then("o sistema retorna mensagem de erro informando que o usuário não foi encontrado", () => {
    esqueciSenha.mensagemErroDados()
})
Then("o sistema envia uma notificação para o e-mail do usuário solicitando confirmação da alteração de senha", () => {
    esqueciSenha.mensagemSucessoSenha()
})
//Fim dos elementos do teste "esqueciSenha.feature".

//Início dos elementos do teste "consultaSinistroAuto.feature".

Given("que o usuário esteja na página Consultar Sinistro", () => {
    consultaSinistroAuto.homePage()
    consultaSinistroAuto.formEmail()
    consultaSinistroAuto.formPassword()
    consultaSinistroAuto.loginButton()
    consultaSinistroAuto.mensagemConfirmacao()
    consultaSinistroAuto.conSinistro()
})
And("escolher o ramo Auto e clicar em Consultar", () => {
    consultaSinistroAuto.conSinistro()
})

//Fim dos elementos do teste "consultaSinistroAuto.feature".