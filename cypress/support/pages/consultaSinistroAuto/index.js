/// <reference types="Cypress" />

const elConsultaSinistroAuto = require('./elements').ELEMENTS

class consultaSinistroAuto {
    homePage() {
        cy.visit(elConsultaSinistroAuto.page)
    }
    formEmail() {
        cy.get(elConsultaSinistroAuto.emailInput).type("master@amarelo.com.br")
    }
    formPassword() {
        cy.get(elConsultaSinistroAuto.passwordInput).type("Brq12345", {log:false})
    }
    loginButton() {
        cy.get(elConsultaSinistroAuto.iconButton).click()
    }
    mensagemConfirmacao() {
        cy.get(elConsultaSinistroAuto.msgConfirm).should('have.text', "Bem vindo ao RNS")
    }
    conSinistro() {
        cy.visit(elConsultaSinistroAuto.conSin)
        cy.get(elConsultaSinistroAuto.conSinConfirm).should('have.text', "Consultar Sinistro Veículo")
    }
    numeroSinistro() {
        cy.get(elConsultaSinistroAuto.numSinistro).type("24112023")
    }
    numeroChassi() {
        cy.get(elConsultaSinistroAuto.numChassi).type('4B0LZHAEEX3KU6499')
    }
    numeroPlaca() {
        cy.get(elConsultaSinistroAuto.numPlaca).type('AVI9999')
    }
    numeroRenavam() {
        cy.get(elConsultaSinistroAuto.numRenavam).type('00643935399')
    }
    numeroCpf() {
        cy.get(elConsultaSinistroAuto.numCpf).type('52514223000170')
    }
    numeroCnpj() {
        cy.get(elConsultaSinistroAuto.numCnpj).type('52514223000170')
    }
    numeroMatriz() {
        cy.get(elConsultaSinistroAuto.numMatriz).type('52514223')
    }
    numeroCnpjOficina() {
        cy.get(elConsultaSinistroAuto.numCnpjOficina).type('44336754000192')
    }
    numeroCpfComprador() {
        cy.get(elConsultaSinistroAuto.numCpfComprador).type('03168463000155')
    }
    numeroCnpjComprador() {
        cy.get(elConsultaSinistroAuto.numCnpjComprador).type('03168463000155')
    }
    dataCadastroInicio() {
        cy.get(elConsultaSinistroAuto.dtCadastroInicio).type('24112023')
    }
    dataCadastroFim() {
        cy.get(elConsultaSinistroAuto.dtCadastroFim).type('24112023')
    }
    dataOcorrenciaInicio() {
        cy.get(elConsultaSinistroAuto.dtOcorrenciaInicio).type('01062022')
    }
    dataOcorrenciaFim() {
        cy.get(elConsultaSinistroAuto.dtOcorrenciaFim).type('01062022')
    }
    botaoConsultar() {
        cy.get(elConsultaSinistroAuto.btnConsultar).click()
    }
    resultadoConsulta() {
        cy.get(elConsultaSinistroAuto.resultConsulta).should('have.text', "Consulta de Sinistros - Veículo")
    }
    resultadoConsultaVazia() {
        cy.get(elConsultaSinistroAuto.resultConsultaVazia).should('have.text', "Informe pelo menos um filtro para efetuar a consulta.")
    }
}

export default new consultaSinistroAuto()