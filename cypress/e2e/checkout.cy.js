describe ("probar ckeckout", () => {
beforeEach(()=>{
    cy.visit("https://www.saucedemo.com/")

  })

it ("completar checkout con datos válidos",()=>{
  cy.get('[data-test="username"]').type("standard_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="shopping-cart-link"]').click()
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="firstName"]').type('Tobias')
  cy.get('[data-test="lastName"]').type('Cabrera')
  cy.get('[data-test="postalCode"]').type('3200')
  cy.get('[data-test="continue"]').click()
  cy.get('[data-test="finish"]').click()


})
it ("checkout sin campos obligatorios",()=>{
  cy.get('[data-test="username"]').type("standard_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="shopping-cart-link"]').click()
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="continue"]').click()
  cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required')


})

it ("checkout sin campos obligatorios", () => {
  cy.get('[data-test="username"]').type("problem_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  cy.get('[data-test="shopping-cart-link"]').click()
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="firstName"]').type('Ana')
  cy.get('[data-test="lastName"]').type('Garcia')
  cy.get('[data-test="continue"]').click()
  
  
  cy.get('[data-test="error"]').should('have.text', 'Error: Last Name is required')

}) 

})