/// <reference types="Cypress" />

const elConsultaSinistroTransporte = require('./elements').ELEMENTS

class consultaSinistroTransporte {
    homePageTr() {
        cy.visit(elConsultaSinistroTransporte.pageTr)
    }
    formEmailTr() {
        cy.get(elConsultaSinistroTransporte.emailInputTr).type("master@amarelo.com.br")
    }
    formPasswordTr() {
        cy.get(elConsultaSinistroTransporte.passwordInputTr).type("Brq12345", {log:false})
    }
    loginButtonTr() {
        cy.get(elConsultaSinistroTransporte.iconButtonTr).click()
    }
    mensagemConfirmacaoTr() {
        cy.get(elConsultaSinistroTransporte.msgConfirmTr).should('have.text', "Bem vindo ao RNS")
    }
    conSinistroTr() {
        cy.visit(elConsultaSinistroTransporte.conSinTr)
        cy.get(elConsultaSinistroTransporte.conSinConfirmTr).should('have.text', "Consultar Sinistro Transporte")
    }
    numeroSinistroTr() {
        cy.get(elConsultaSinistroTransporte.numSinistroTr).type("27112023")
    }
    numeroChassiTr() {
        cy.get(elConsultaSinistroTransporte.numChassiTr).type('4B0LZHAEEX3KU6493')
    }
    numeroPlacaTr() {
        cy.get(elConsultaSinistroTransporte.numPlacaTr).type('AVI1357')
    }
    numeroRenavamTr() {
        cy.get(elConsultaSinistroTransporte.numRenavamTr).type('1643935399')
    }
    numeroCpfTr() {
        cy.get(elConsultaSinistroTransporte.numCpfTr).type('83238433000107')
    }
    numeroCnpjTr() {
        cy.get(elConsultaSinistroTransporte.numCnpjTr).type('83238433000107')
    }
    numeroMatrizTr() {
        cy.get(elConsultaSinistroTransporte.numMatrizTr).type('83238433')
    }
    dataCadastroInicioTr() {
        cy.get(elConsultaSinistroTransporte.dtCadastroInicioTr).type('27112023')
    }
    dataCadastroFimTr() {
        cy.get(elConsultaSinistroTransporte.dtCadastroFimTr).type('27112023')
    }
    dataOcorrenciaInicioTr() {
        cy.get(elConsultaSinistroTransporte.dtOcorrenciaInicioTr).type('27112023')
    }
    dataOcorrenciaFimTr() {
        cy.get(elConsultaSinistroTransporte.dtOcorrenciaFimTr).type('27112023')
    }
    botaoConsultarTr() {
        cy.get(elConsultaSinistroTransporte.btnConsultarTr).click()
    }
    resultadoConsultaTr() {
        cy.get(elConsultaSinistroTransporte.resultConsultaTr).should('have.text', "Consulta de Sinistros - Transporte")
    }
    resultadoConsultaVaziaTr() {
        cy.get(elConsultaSinistroTransporte.resultConsultaVaziaTr).should('have.text', "Informe pelo menos um filtro para efetuar a consulta.")
    }
}

export default new consultaSinistroTransporte()