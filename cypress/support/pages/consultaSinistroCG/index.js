/// <reference types="Cypress" />

const elConsultaSinistroCg = require('./elements').ELEMENTS

class consultaSinistroCg {
    homePageCg() {
        cy.visit(elConsultaSinistroCg.pageCg)
    }
    formEmailCg() {
        cy.get(elConsultaSinistroCg.emailInputCg).type("master@amarelo.com.br")
    }
    formPasswordCg() {
        cy.get(elConsultaSinistroCg.passwordInputCg).type("Brq12345", {log:false})
    }
    loginButtonCg() {
        cy.get(elConsultaSinistroCg.iconButtonCg).click()
    }
    mensagemConfirmacaoCg() {
        cy.get(elConsultaSinistroCg.msgConfirmCg).should('have.text', "Bem vindo ao RNS")
    }
    conSinistroCg() {
        cy.visit(elConsultaSinistroCg.conSinCg)
        cy.get(elConsultaSinistroCg.conSinConfirmCg).should('have.text', "Consultar Sinistro Créditos e Garantias")
    }
    tipoConsultaCg() {
        cy.get(elConsultaSinistroCg.tipoConCg).trigger('click')
    }
    escolheCnpjCg() {
        cy.get(elConsultaSinistroCg.escCnpjCg).trigger('click')
    }
    digitaCnpjCg() {
        cy.get(elConsultaSinistroCg.digCnpjCg).type('67673776000143')
    }
    escolheCpfCg() {
        cy.get(elConsultaSinistroCg.escCpfCg).trigger('click')
    }
    digitaCpfCg() {
        cy.get(elConsultaSinistroCg.digCpfCg).type('87495824026')
    }
    numeroSinistroCg() {
        cy.get(elConsultaSinistroCg.numSinistroCg).type('041220232')
    }
    nomeSeguradoCg() {
        cy.get(elConsultaSinistroCg.nomeSegCg).type('PAULO TESTE DA SILVA')
    }
    botaoConsultarCg() {
        cy.get(elConsultaSinistroCg.btnConsultarCg).click()
    }
    resultadoConsultaCg() {
        cy.get(elConsultaSinistroCg.resultConsultaCg).should('have.text', "Consulta de Sinistros - Créditos e Garantias")
    }
    resultadoConsultaVaziaCg() {
        cy.get(elConsultaSinistroCg.resultConsultaVaziaCg).should('have.text', "Informe pelo menos um filtro para efetuar a consulta.")
    }
}

export default new consultaSinistroCg()