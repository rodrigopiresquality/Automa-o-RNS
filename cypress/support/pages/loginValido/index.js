/// <reference types="Cypress" />

const elLoginValido = require('./elements').ELEMENTS

class loginValido {
    homePage() {
        cy.visit(elLoginValido.page)
    }
    formEmail() {
        cy.get(elLoginValido.emailInput).type("master@amarelo.com.br")
    }
    formPassword() {
        cy.get(elLoginValido.passwordInput).type("Brq12345", {log:false})
    }
    loginButton() {
        cy.get(elLoginValido.iconButton).click()
    }
    mensagemConfirmacao() {
        cy.get(elLoginValido.msgConfirm).should('have.text', "Bem vindo ao RNS")
    }
}
export default new loginValido()