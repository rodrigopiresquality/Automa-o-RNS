import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import loginInvalido from "../pages/loginInvalido"
import loginValido from "../pages/loginValido"
import esqueciSenha from "../pages/esqueciSenha"
import consultaSinistroAuto from "../pages/consultaSinistroAuto"
import consultaSinistroTransporte from "../pages/consultaSinistroTransporte"

beforeEach(() => {
    cy.viewport(1920, 1080)
})

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
Given("que o usuário esteja na página Consultar Sinistro Auto", () => {
    consultaSinistroAuto.homePage()
    consultaSinistroAuto.formEmail()
    consultaSinistroAuto.formPassword()
    consultaSinistroAuto.loginButton()
    consultaSinistroAuto.mensagemConfirmacao()
})
And("escolher o ramo Auto e clicar em Consultar", () => {
    consultaSinistroAuto.conSinistro()
})
When("o usuário inserir o número de sinistro no campo Número do Sinistro Auto", () => {
    consultaSinistroAuto.numeroSinistro()
})
When("o usuário inserir o número de chassi no campo Chassi Auto", () => {
    consultaSinistroAuto.numeroChassi()
})
When("o usuário inserir a placa no campo Placa Auto", () => {
    consultaSinistroAuto.numeroPlaca()
})
When("o usuário inserir o RENAVAM no campo RENAVAM Auto", () => {
    consultaSinistroAuto.numeroRenavam()
})
When("o usuário inserir o CPF no campo CPF Auto", () => {
    consultaSinistroAuto.numeroCpf()
})
When("o usuário inserir o CNPJ no campo CNPJ Auto", () => {
    consultaSinistroAuto.numeroCnpj()
})
When("o usuário inserir a Matriz CNPJ no campo Matriz CNPJ Auto", () => {
    consultaSinistroAuto.numeroMatriz()
})
When("o usuário inserir o CNPJ de Oficina no campo CNPJ Oficina Auto", () => {
    consultaSinistroAuto.numeroCnpjOficina()
})
When("o usuário inserir o CPF do Comprador no campo CPF Comprador Auto", () => {
    consultaSinistroAuto.numeroCpfComprador()
})
When("o usuário inserir o CNPJ do Comprador no campo CNPJ Comprador Auto", () => {
    consultaSinistroAuto.numeroCnpjComprador()
})
When("o usuário inserir o intervalo de data de cadastro nos campos Data de Cadastro Início e Data de Cadastro Fim Auto", () => {
    consultaSinistroAuto.dataCadastroInicio()
    consultaSinistroAuto.dataCadastroFim()
})
When("o usuário inserir o intervalo de data de ocorrência nos campos Data de Ocorrência Início e Data de Ocorrência Fim Auto", () => {
    consultaSinistroAuto.dataOcorrenciaFim()
    consultaSinistroAuto.dataOcorrenciaInicio()
})
When("o usuário deixar os filtros necessários para consulta em branco Auto", () => {})
And("clicar em Consultar Auto", () => {
    consultaSinistroAuto.botaoConsultar()
})
Then("o sistema retorna as informações do sinistro do ramo Auto", () => {
    consultaSinistroAuto.resultadoConsulta()
})
Then("o sistema retorna a informação de que pelo menos um filtro deve ser preenchido", () => {
    consultaSinistroAuto.resultadoConsultaVazia()
})
Given("que o usuário esteja na página Consultar Sinistro Transporte", () => {
    consultaSinistroTransporte.homePageTr()
    consultaSinistroTransporte.formEmailTr()
    consultaSinistroTransporte.formPasswordTr()
    consultaSinistroTransporte.loginButtonTr()
    consultaSinistroTransporte.mensagemConfirmacaoTr()
})
And("escolher o ramo Transporte e clicar em Consultar", () => {
    consultaSinistroTransporte.conSinistroTr()
})
When("o usuário inserir o número de sinistro no campo Número do Sinistro Transporte", () => {
    consultaSinistroTransporte.numeroSinistroTr()
})
When("o usuário inserir o número de chassi no campo Chassi Transporte", () => {
    consultaSinistroTransporte.numeroChassiTr()
})
When("o usuário inserir a placa no campo Placa Transporte", () => {
    consultaSinistroTransporte.numeroPlacaTr()
})
When("o usuário inserir o RENAVAM no campo RENAVAM Transporte", () => {
    consultaSinistroTransporte.numeroRenavamTr()
})
When("o usuário inserir o CPF no campo CPF Transporte", () => {
    consultaSinistroTransporte.numeroCpfTr()
})
When("o usuário inserir o CNPJ no campo CNPJ Transporte", () => {
    consultaSinistroTransporte.numeroCnpjTr()
})
When("o usuário inserir a Matriz CNPJ no campo Matriz CNPJ Transporte", () => {
    consultaSinistroTransporte.numeroMatrizTr()
})
When("o usuário inserir o intervalo de data de cadastro nos campos Data de Cadastro Início e Data de Cadastro Fim Transporte", () => {
    consultaSinistroTransporte.dataCadastroFimTr()
    consultaSinistroTransporte.dataCadastroInicioTr()
})
When("o usuário inserir o intervalo de data de ocorrência nos campos Data de Ocorrência Início e Data de Ocorrência Fim Transporte", () => {
    consultaSinistroTransporte.dataOcorrenciaInicioTr()
    consultaSinistroTransporte.dataOcorrenciaFimTr()
})
When("o usuário deixar os filtros necessários para consulta em branco Transporte", () => {})
And("clicar em Consultar Transporte", () => {
    consultaSinistroTransporte.botaoConsultarTr()
})
Then("o sistema retorna as informações do sinistro do ramo Transporte", () => {
    consultaSinistroTransporte.resultadoConsultaTr()
})
Then("o sistema retorna a informação de que pelo menos um filtro deve ser preenchido", () => {
    consultaSinistroTransporte.resultadoConsultaVaziaTr()
})