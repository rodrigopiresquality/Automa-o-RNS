/// <reference types="Cypress" />

const elEsqueciSenha = require('./elements').ELEMENTS

class esqueciSenha {
    forgotPassword() {
        cy.get(elEsqueciSenha.page).click()
    }
    recoveryScreen() {
        cy.get(elEsqueciSenha.recoveryPage).should('have.text', "Redefinir Senha")
    }
    redefinir() {
        cy.visit(elEsqueciSenha.esqueci)
    }
    formEmailRecInv() {
        cy.get(elEsqueciSenha.emailRec).type('master@amarelo.com')
    }
    formEmailRec() {
        cy.get(elEsqueciSenha.emailRec).type('master@amarelo.com.br')
    }
    formSusepInv() {
        cy.get(elEsqueciSenha.susepRec).type('900')
    }
    formSusep() {
        cy.get(elEsqueciSenha.susepRec).type('9002')
    }
    formCpfInv() {
        cy.get(elEsqueciSenha.cpfRec).type('4283695700')
    }
    formCpf() {
        cy.get(elEsqueciSenha.cpfRec).type('42836957000')
    }
    botaoCont() {
        cy.get(elEsqueciSenha.botCont).click()
    }
    mensagemErroDados() {
        cy.get(elEsqueciSenha.msgErroDados).should('have.text', "\n        \t\tUsuário não encontrado com os dados informados. Por favor tente novamente!\n        \t")
    }
    mensagemSucessoSenha() {
        cy.get(elEsqueciSenha.msgSucessoSenha).should('have.text', "\n        \t\tNova senha enviada para o e-mail com sucesso.\n        \t")
    }
}

export default new esqueciSenha()