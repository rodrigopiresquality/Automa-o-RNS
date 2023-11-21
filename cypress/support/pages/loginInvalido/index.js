/// <reference types="Cypress" />

const elLoginInvalido = require('./elements').ELEMENTS

class loginInvalido {
    homePage() {
        cy.visit(elLoginInvalido.page)
    }
    formInvEmail() {
        cy.get(elLoginInvalido.emailInput).type("master@amarelo.com.b")
    }
    formInvPassword() {
        cy.get(elLoginInvalido.passwordInput).type("Brq1234", {log:false})
    }
    loginButton() {
        cy.get(elLoginInvalido.iconButton).click()
    }
    mensagemErroSenha() {
        cy.get(elLoginInvalido.msgErro).should('have.text', "\n        \t\tLogin / Senha inválida.\n        \t")
    }
    mensagemErroEmail() {
        cy.get(elLoginInvalido.msgErro).should('have.text', "\n        \t\tUsuario não encontrado.\n        \t")
    }
}
export default new loginInvalido()