/// <reference types="Cypress" />

const elConsultaSinistroToR = require('./elements').ELEMENTS

class consultaSinistroToR {
    homePageToR() {
        cy.visit(elConsultaSinistroToR.pageToR)
    }
    formEmailToR() {
        cy.get(elConsultaSinistroToR.emailInputToR).type("master@amarelo.com.br")
    }
    formPasswordToR() {
        cy.get(elConsultaSinistroToR.passwordInputToR).type("Brq12345", {log:false})
    }
    loginButtonToR() {
        cy.get(elConsultaSinistroToR.iconButtonToR).click()
    }
    mensagemConfirmacaoToR() {
        cy.get(elConsultaSinistroToR.msgConfirmToR).should('have.text', "Bem vindo ao RNS")
    }
    conSinistroToR() {
        cy.visit(elConsultaSinistroToR.conSinToR)
        cy.get(elConsultaSinistroToR.conSinConfirmToR).should('have.text', "Consultar Todos os Ramos")
    }
    tipoConsultaToR() {
        cy.get(elConsultaSinistroToR.tipoConToR).trigger('click')
    }
    escolheCnpjToR() {
        cy.get(elConsultaSinistroToR.escCnpjToR).trigger('click')
    }
    digitaCnpjToR() {
        cy.get(elConsultaSinistroToR.digCnpjToR).type('52514223000170')
    }
    escolheCpfToR() {
        cy.get(elConsultaSinistroToR.escCpfToR).trigger('click')
    }
    digitaCpfToR() {
        cy.get(elConsultaSinistroToR.digCpfToR).type('73653780772')
    }
    digitaCnpjInvToR() {
        cy.get(elConsultaSinistroToR.digCnpjInvToR).type('5251422300017')
    }
    digitaCpfInvToR() {
        cy.get(elConsultaSinistroToR.digCpfInvToR).type('7365378077')
    }
    botaoConsultarToR() {
        cy.get(elConsultaSinistroToR.btnConsultarToR).click()
    }
    resultadoConsultaToR() {
        cy.get(elConsultaSinistroToR.resultConsultaToR).should('have.text', "Consulta de Sinistros - Veículo")
    }
    resultadoConsultaCnpjInvToR() {
        cy.get(elConsultaSinistroToR.resultConsultaCnpjInvToR).should('have.text', "CNPJ inválido!")
    }
    resultadoConsultaCpfInvToR() {
        cy.get(elConsultaSinistroToR.resultConsultaCpfInvToR).should('have.text', "CPF inválido!")
    }
    resultadoConsultaVaziaToR() {
        cy.get(elConsultaSinistroToR.resultConsultaVaziaToR).should('have.text', "Selecione um filtro!")
    }
}

export default new consultaSinistroToR()