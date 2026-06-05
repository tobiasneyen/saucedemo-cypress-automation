describe("probar carrito",() => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    })



it ("agregar un producto al carrito",() => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get ('[data-test="password"]').type("secret_sauce")
     cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should('include', '/cart.html')
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack')
})
it ("Agregar múltiples productos y verificar contador",() => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get ('[data-test="password"]').type("secret_sauce")
     cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('have.text','3')
    
})

it ("Eliminar un producto desde la página del carrito",() => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get ('[data-test="password"]').type("secret_sauce")
     cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
    
    
})

})