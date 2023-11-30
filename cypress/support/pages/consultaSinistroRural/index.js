/// <reference types="Cypress" />

const elConsultaSinistroRural = require('./elements').ELEMENTS

class consultaSinistroRural {
    homePageRr() {
        cy.visit(elConsultaSinistroRural.pageRr)
    }
    formEmailRr() {
        cy.get(elConsultaSinistroRural.emailInputRr).type("master@amarelo.com.br")
    }
    formPasswordRr() {
        cy.get(elConsultaSinistroRural.passwordInputRr).type("Brq12345", {log:false})
    }
    loginButtonRr() {
        cy.get(elConsultaSinistroRural.iconButtonRr).click()
    }
    mensagemConfirmacaoRr() {
        cy.get(elConsultaSinistroRural.msgConfirmRr).should('have.text', "Bem vindo ao RNS")
    }
    conSinistroRr() {
        cy.visit(elConsultaSinistroRural.conSinRr)
        cy.get(elConsultaSinistroRural.conSinConfirmRr).should('have.text', "Consultar Sinistro Rural")
    }
    numeroSinistroRr() {
        cy.get(elConsultaSinistroRural.numSinistroRr).type("28112023")
    }
    tipoCulturaRr() {
        cy.get(elConsultaSinistroRural.tipoCultRr).trigger('click')
    }
    escolheCulturaRr() {
        cy.get(elConsultaSinistroRural.escolheCultRr).trigger('click')
    }
    ufRr() {
        cy.get(elConsultaSinistroRural.unFedRr).trigger('click')
    }
    escolheUfRr() {
        cy.get(elConsultaSinistroRural.escolheUnFedRr).trigger('click')
    }
    municipioRr() {
        cy.get(elConsultaSinistroRural.municRr).trigger('click')
    }
    escolheMunicipioRr() {
        cy.get(elConsultaSinistroRural.escolheMunicRr).trigger('click')
    }
    tipoDocumentoRr() {
        cy.get(elConsultaSinistroRural.tipoDocRr).trigger('click')
    }
    escolheDocumentoRr() {
        cy.get(elConsultaSinistroRural.escolheDocRr).trigger('click')
    }
    digitaDocumentoRr() {
        cy.get(elConsultaSinistroRural.digDocRr).type('71043526005')
    }
    botaoConsultarRr() {
        cy.get(elConsultaSinistroRural.btnConsultarRr).click()
    }
    resultadoConsultaRr() {
        cy.get(elConsultaSinistroRural.resultConsultaRr).should('have.text', "Consulta de Sinistros - Rural")
    }
    resultadoConsultaVaziaRr() {
        cy.get(elConsultaSinistroRural.resultConsultaVaziaRr).should('have.text', "Informe pelo menos um filtro para efetuar a consulta.")
    }
}

export default new consultaSinistroRural()