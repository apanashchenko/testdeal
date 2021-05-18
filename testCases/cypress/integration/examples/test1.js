
// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// remember to manually delete all items before running the test
// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

beforeEach(() => {
  cy.visit('https://dev.deel.wtf/create/fixed')
})

it('loads', () => {
  cy.contains('h2', 'Creating')
})

var d = new Date();
d.setDate(d.getDay()-1)

it('adds new contractor', () => {
    cy.get('.input').type('Nahuel Muruga')
    cy.get('.textarea').type('test msg {enter}')
    cy.get('.calendar-input'.type(d.setDate(d.getDay()-1)))
    cy.contain('submit').click()
    cy.contain('rate').type('1000')
    cy.contain('.select_single-value').type('GBP{enter}')
  

  })
 
  
