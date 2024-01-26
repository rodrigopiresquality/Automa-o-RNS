import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import loginInvalido from "../pages/loginInvalido"
import loginValido from "../pages/loginValido"
import esqueciSenha from "../pages/esqueciSenha"
import consultaSinistroAuto from "../pages/consultaSinistroAuto"
import consultaSinistroTransporte from "../pages/consultaSinistroTransporte"
import consultaSinistroRural from "../pages/consultaSinistroRural"
import consultaSinistroPatrimonial from "../pages/consultaSinistroPatrimonial"
import consultaSinistroCg from "../pages/consultaSinistroCG"
import consultaSinistroToR from "../pages/consultaTodosOsRamos"

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
Given("que o usuário esteja na página Consultar Sinistro Rural", () => {
    consultaSinistroRural.homePageRr()
    consultaSinistroRural.formEmailRr()
    consultaSinistroRural.formPasswordRr()
    consultaSinistroRural.loginButtonRr()
    consultaSinistroRural.mensagemConfirmacaoRr()
})
And("escolher o ramo Rural e clicar em Consultar", () => {
    consultaSinistroRural.conSinistroRr()
})
When("o usuário inserir o número de sinistro no campo Número do Sinistro Rural", () => {
    consultaSinistroRural.numeroSinistroRr()
})
When("o usuário inserir o tipo de cultura no campo Tipo de Cultura Rural", () => {
    consultaSinistroRural.tipoCulturaRr()
    consultaSinistroRural.escolheCulturaRr()
})
When("o usuário inserir a UF e o município nos campos UF e Município Rural", () => {
    consultaSinistroRural.ufRr()
    consultaSinistroRural.escolheUfRr()
    cy.wait(1000)
    consultaSinistroRural.municipioRr()
    consultaSinistroRural.escolheMunicipioRr()
})
When("o usuário inserir o documento no campo Tipo de Documento Rural", () => {
    consultaSinistroRural.tipoDocumentoRr()
    consultaSinistroRural.escolheDocumentoRr()
    cy.wait(1000)
    consultaSinistroRural.digitaDocumentoRr()
})
When("o usuário deixar os filtros necessários para consulta em branco Rural", () => {})
And("clicar em Consultar Rural", () => {
    consultaSinistroRural.botaoConsultarRr()
})
Then("o sistema retorna as informações do sinistro do ramo Rural", () => {
    consultaSinistroRural.resultadoConsultaRr()
})
Then("o sistema retorna a informação de que pelo menos um filtro deve ser preenchido", () => {
    consultaSinistroRural.resultadoConsultaVaziaRr()
})
Given("que o usuário esteja na página Consultar Sinistro Patrimonial", () => {
    consultaSinistroPatrimonial.homePagePa()
    consultaSinistroPatrimonial.formEmailPa()
    consultaSinistroPatrimonial.formPasswordPa()
    consultaSinistroPatrimonial.loginButtonPa()
    consultaSinistroPatrimonial.mensagemConfirmacaoPa()
})
And("escolher o ramo Patrimonial e clicar em Consultar", () => {
    consultaSinistroPatrimonial.conSinistroPa()
})
When("o usuário inserir o número de CNPJ no campo CNPJ Patrimonial", () => {
    consultaSinistroPatrimonial.tipoConsultaPa()
    consultaSinistroPatrimonial.escolheCnpjPa()
    consultaSinistroPatrimonial.digitaCnpjPa()
})
When("o usuário inserir o número de CPF no campo CPF Patrimonial", () => {
    consultaSinistroPatrimonial.tipoConsultaPa()
    consultaSinistroPatrimonial.escolheCpfPa()
    consultaSinistroPatrimonial.digitaCpfPa()
})
When("o usuário inserir o CEP e o número nos campos CEP e Número do endereço de ocorrência Patrimonial", () => {
    consultaSinistroPatrimonial.tipoConsultaPa()
    consultaSinistroPatrimonial.escolheEnderecoOcorrenciaPa()
    consultaSinistroPatrimonial.digitaCepOcorrenciaPa()
    consultaSinistroPatrimonial.digitaNumeroOcorrenciaPa()
})
When("o usuário inserir o CEP e o número nos campos CEP e Número do endereço do segurado Patrimonial", () => {
    consultaSinistroPatrimonial.tipoConsultaPa()
    consultaSinistroPatrimonial.escolheEnderecoSeguradoPa()
    consultaSinistroPatrimonial.digitaCepSeguradoPa()
    consultaSinistroPatrimonial.digitaNumeroSeguradoPa()
})
When("o usuário inserir o número da matriz CNPJ no campo Matriz CNPJ Patrimonial", () => {
    consultaSinistroPatrimonial.tipoConsultaPa()
    consultaSinistroPatrimonial.escolheMatrizCnpjPa()
    consultaSinistroPatrimonial.digitaMatrizCnpjPa()
})
When("o usuário deixar os filtros necessários para consulta em branco Patrimonial", () => {})
And("clicar em Consultar Patrimonial", () => {
    consultaSinistroPatrimonial.botaoConsultarPa()
})
Then("o sistema retorna as informações do sinistro do ramo Patrimonial", () => {
    consultaSinistroPatrimonial.resultadoConsultaPa()
})
Then("o sistema retorna a informação de que pelo menos um filtro deve ser preenchido", () => {
    consultaSinistroPatrimonial.resultadoConsultaVaziaPa()
})
Given("que o usuário esteja na página Consultar Sinistro Créditos e Garantias", () => {
    consultaSinistroCg.homePageCg()
    consultaSinistroCg.formEmailCg()
    consultaSinistroCg.formPasswordCg()
    consultaSinistroCg.loginButtonCg()
    consultaSinistroCg.mensagemConfirmacaoCg()
})
And("escolher o ramo Créditos e Garantias e clicar em Consultar", () => {
    consultaSinistroCg.conSinistroCg()
})
When("o usuário inserir o número de CNPJ no campo CNPJ Créditos e Garantias", () => {
    consultaSinistroCg.tipoConsultaCg()
    consultaSinistroCg.escolheCnpjCg()
    consultaSinistroCg.digitaCnpjCg()
})
When("o usuário inserir o número de CPF no campo CPF Créditos e Garantias", () => {
    consultaSinistroCg.tipoConsultaCg()
    consultaSinistroCg.escolheCpfCg()
    consultaSinistroCg.digitaCpfCg()
})
When("o usuário inserir o número do sinistro no campo Número do Sinistro Créditos e Garantias", () => {
    consultaSinistroCg.numeroSinistroCg()
})
When("o usuário inserir o nome do segurado no campo Nome do Segurado Créditos e Garantias", () => {
    consultaSinistroCg.nomeSeguradoCg()
})
When("o usuário deixar os filtros necessários para consulta em branco Créditos e Garantias", () => {})
And("clicar em Consultar Créditos e Garantias", () => {
    consultaSinistroCg.botaoConsultarCg()
})
Then("o sistema retorna as informações do sinistro do ramo Créditos e Garantias", () => {
    consultaSinistroCg.resultadoConsultaCg()
})
Then("o sistema retorna a informação de que pelo menos um filtro deve ser preenchido", () => {
    consultaSinistroCg.resultadoConsultaVaziaCg()
})
Given("que o usuário esteja na página Consultar Sinistro Todos os Ramos", () => {
    consultaSinistroToR.homePageToR()
    consultaSinistroToR.formEmailToR()
    consultaSinistroToR.formPasswordToR()
    consultaSinistroToR.loginButtonToR()
    consultaSinistroToR.mensagemConfirmacaoToR()
})
And("escolher o ramo Todos os Ramos e clicar em Consultar", () => {
    consultaSinistroToR.conSinistroToR()
})
When("o usuário inserir o número de CNPJ no campo CNPJ Todos os Ramos", () => {
    consultaSinistroToR.tipoConsultaToR()
    consultaSinistroToR.escolheCnpjToR()
    consultaSinistroToR.digitaCnpjToR()
})
When("o usuário inserir o número de CPF no campo CPF Todos os Ramos", () => {
    consultaSinistroToR.tipoConsultaToR()
    consultaSinistroToR.escolheCpfToR()
    consultaSinistroToR.digitaCpfToR()
})
When("o usuário inserir o número de CNPJ inválido no campo CNPJ Todos os Ramos", () => {
    consultaSinistroToR.tipoConsultaToR()
    consultaSinistroToR.escolheCnpjToR()
    consultaSinistroToR.digitaCnpjInvToR()
})
When("o usuário inserir o número de CPF inválido no campo CPF Todos os Ramos", () => {
    consultaSinistroToR.tipoConsultaToR()
    consultaSinistroToR.escolheCpfToR()
    consultaSinistroToR.digitaCpfInvToR()
})
When("o usuário deixar os filtros necessários para consulta em branco Todos os Ramos", () => {})
And("clicar em Consultar Todos os Ramos", () => {
    consultaSinistroToR.botaoConsultarToR()
})
Then("o sistema retorna as informações do sinistro do ramo Todos os Ramos", () => {
    consultaSinistroToR.resultadoConsultaToR()
})
Then("o sistema retorna a informação de que o CNPJ é inválido", () => {
    consultaSinistroToR.resultadoConsultaCnpjInvToR()
})
Then("o sistema retorna a informação de que o CPF é inválido", () => {
    consultaSinistroToR.resultadoConsultaCpfInvToR()
})
Then("o sistema retorna a informação de que pelo menos um filtro deve ser preenchido Todos os Ramos", () => {
    consultaSinistroToR.resultadoConsultaVaziaToR()
})