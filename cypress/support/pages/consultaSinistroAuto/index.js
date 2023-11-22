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
        cy.get(elConsultaSinistroAuto.conSinConfirm).should('have.text', "\n\t\t\tConsultar Sinistro Veículo\n\t\t")
    }
    
}

export default new consultaSinistroAuto()