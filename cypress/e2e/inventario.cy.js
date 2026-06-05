describe ("probar inventario en sauce demo",() => {
  beforeEach(()=>{
    cy.visit("https://www.saucedemo.com/")

  })



it ("verificar cantidad de productos en el inventario",()=>{
  cy.get('[data-test="username"]').type("standard_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="inventory-item"]').should('have.length',6)

  
})
it ("imagenes de productos con problem_user",()=>{
  cy.get('[data-test="username"]').type("problem_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()


  
})
it ("Ordenar productos de menor a mayor",()=>{
  cy.get('[data-test="username"]').type("standard_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="product-sort-container"]').select('lohi')
  cy.get('[data-test="inventory-item-name"]').eq(0).should('have.text', 'Sauce Labs Onesie')
  cy.get('[data-test="inventory-item-price"]').eq(0).should('have.text', '$7.99')


  
})
it ("Ordenar productos con problem_user verifica precios",()=>{
  cy.get('[data-test="username"]').type("problem_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="product-sort-container"]').select('lohi')
  cy.get('[data-test="inventory-item-price"]').eq(0).should('have.text', '$7.99')
  
  
  
})


})