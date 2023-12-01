/// <reference types="Cypress" />

const elConsultaSinistroPatrimonial = require('./elements').ELEMENTS

class consultaSinistroPatrimonial {
    homePagePa() {
        cy.visit(elConsultaSinistroPatrimonial.pagePa)
    }
    formEmailPa() {
        cy.get(elConsultaSinistroPatrimonial.emailInputPa).type("master@amarelo.com.br")
    }
    formPasswordPa() {
        cy.get(elConsultaSinistroPatrimonial.passwordInputPa).type("Brq12345", {log:false})
    }
    loginButtonPa() {
        cy.get(elConsultaSinistroPatrimonial.iconButtonPa).click()
    }
    mensagemConfirmacaoPa() {
        cy.get(elConsultaSinistroPatrimonial.msgConfirmPa).should('have.text', "Bem vindo ao RNS")
    }
    conSinistroPa() {
        cy.visit(elConsultaSinistroPatrimonial.conSinPa)
        cy.get(elConsultaSinistroPatrimonial.conSinConfirmPa).should('have.text', "Consultar Sinistro Patrimonial")
    }
    tipoConsultaPa() {
        cy.get(elConsultaSinistroPatrimonial.tipoConPa).trigger('click')
    }
    escolheCnpjPa() {
        cy.get(elConsultaSinistroPatrimonial.escCnpjPa).trigger('click')
    }
    digitaCnpjPa() {
        cy.get(elConsultaSinistroPatrimonial.digCnpjPa).type('67496334000179')
    }
    escolheCpfPa() {
        cy.get(elConsultaSinistroPatrimonial.escCpfPa).trigger('click')
    }
    digitaCpfPa() {
        cy.get(elConsultaSinistroPatrimonial.digCpfPa).type('07421446745')
    }
    escolheEnderecoOcorrenciaPa() {
        cy.get(elConsultaSinistroPatrimonial.escEndOcorrPa).trigger('click')
    }
    digitaCepOcorrenciaPa() {
        cy.get(elConsultaSinistroPatrimonial.digCepOcorrPa).type('21050650')
    }
    digitaNumeroOcorrenciaPa() {
        cy.get(elConsultaSinistroPatrimonial.digNumOcorrPa).type('165')
    }
    escolheEnderecoSeguradoPa() {
        cy.get(elConsultaSinistroPatrimonial.escEndSegPa).trigger('click')
    }
    digitaCepSeguradoPa() {
        cy.get(elConsultaSinistroPatrimonial.digCepSegPa).type('20941150')
    }
    digitaNumeroSeguradoPa() {
        cy.get(elConsultaSinistroPatrimonial.digNumSegPa).type('131')
    }
    escolheMatrizCnpjPa() {
        cy.get(elConsultaSinistroPatrimonial.escMatrizCnpjPa).trigger('click')
    }
    digitaMatrizCnpjPa() {
        cy.get(elConsultaSinistroPatrimonial.digMatrizCnpjPa).type('67496334')
    }
    botaoConsultarPa() {
        cy.get(elConsultaSinistroPatrimonial.btnConsultarPa).click()
    }
    resultadoConsultaPa() {
        cy.get(elConsultaSinistroPatrimonial.resultConsultaPa).should('have.text', "Consulta de Sinistros - Patrimonial")
    }
    resultadoConsultaVaziaPa() {
        cy.get(elConsultaSinistroPatrimonial.resultConsultaVaziaPa).should('have.text', "Informe pelo menos um filtro para efetuar a consulta.")
    }
}

export default new consultaSinistroPatrimonial()