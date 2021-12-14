
function geraStringAleatoria(tamanho) {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}

var nome = geraStringAleatoria(8);

it('Deve falhar no Login', () => {
    cy.visit('http://automationpractice.com/index.php')
    // Faz uma busca pela classe login e ao encontrar clica neste elemento
    cy.get('.login').click()
    // Faz uma busca pelo ID email e ao encontrar preenche com o email
    cy.get('#email').type(nome+'@hotmail.com.br')
    // Faz uma busca pelo ID passwd e ao encontrar preenche com a senha
    cy.get('#passwd').type('xxxxxx')
    // Busca pelo botão de login e ao encontrar pressiona o botão
    cy.get('#SubmitLogin > span').click()
    //Verifica se o botão de login está presente na página para validar se houve falha ao logar
    cy.get('#SubmitLogin > span').should('exist')
})




it('Deve cadastrar com sucesso', () => {
    // Entra no site, procura pelo botão Sign in e clica;
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    // Entra com o email no ID email_create e clica no botão Create an Account
    cy.get('#email_create').type(nome+'@hotmail.com.br')
    cy.get('#SubmitCreate > span').click()
    // Preenche apenas os dados necessários para cadastro e clica no botão submit account
    cy.get('#id_gender1').click()
    cy.get('#customer_firstname').type(nome)
    cy.get('#customer_lastname').type('silva')
    cy.get('#passwd').type('xxxxxx')
    cy.get('#days').contains('1').click({ force: true })
    cy.get('#firstname').type(nome)
    cy.get('#lastname').type('silva')
    cy.get('#company').type('test')
    cy.get('#address1').type('street address')
    cy.get('#city').type('city test')
    cy.get('#id_state').select(1)
    cy.get('#postcode').type('37564')
    cy.get('#phone_mobile').type('998999999')
    cy.get('#alias').type('house test')
    cy.get('#submitAccount > span').click()
    // Verifica se o wishlist está presente na página para confirmar o cadastro
    cy.get('.lnk_wishlist > a > span').should('exist')

})



it('Deve efetuar login com sucesso', () => {
    cy.visit('http://automationpractice.com/index.php')
    // Faz uma busca pela classe login e ao encontrar clica neste elemento
    cy.get('.login').click()
    // Faz uma busca pelo ID email e ao encontrar preenche com o email 
    cy.get('#email').type(nome+'@hotmail.com.br')
    // Faz uma busca pelo ID passwd e ao encontrar preenche com a senha 
    cy.get('#passwd').type('xxxxxx')
    // Busca pelo botão de login e ao encontrar pressiona o botão
    cy.get('#SubmitLogin > span').click()
    //Verifica se o botão de wishlist está presente na página para validar se houve sucesso ao logar
    cy.get('.lnk_wishlist > a > span').should('exist')
})










