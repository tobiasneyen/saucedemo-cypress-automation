//mi primera automatización
describe ("loguearse en sauce demo",() => {
  beforeEach(()=>{
    cy.visit("https://www.saucedemo.com/")

  })
it ("loguearse exitosamente con uso estandar ",() => {
  cy.get('[data-test="username"]').type("standard_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()


  
})
it ("Loguearse con contraseña equivocada ",() => {
  cy.get('[data-test="username"]').type("standard_user")
  cy.get('[data-test="password"]').type("12345")
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="error"]').should('be.visible')

})

it ("Loguearse con campos vacios ",() => {
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="error"]').should('be.visible')


})
it("Logout desde el menú hamburguesa", () => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="open-menu"]').click({ force: true })
    cy.get('[data-test="logout-sidebar-link"]').click({ force: true })
    cy.url().then((url) => {
  cy.log(url)
})
    
  
  
})

it("login con usuario bloqueado",() => {
  cy.get('[data-test="username"]').type("locked_out_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get ('[data-test="login-button"]').click()
  cy.get('[data-test="error"]').should('be.visible')
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
it ("ordenar productos con problem_user",()=> {
  cy.get('[data-test="username"]').type("problem_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="product-sort-container"]').select('lohi')
  cy.get('[data-test="inventory-item-price"]').first().should('have.text', '$7.99')
  

  
})


})
