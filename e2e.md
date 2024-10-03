#

## tdd metrics + 2 types

###

#### reasoning

WHY

- cohersion, coupling
- code coverage, version controll
  [beginner] according to <https://www.agilealliance.org/glossary/tdd/>

TDD types

- acceptance (BBD)
- Developer (JIT)
  AMDD
- driven high lvl requirements

Access of store/DB diff behaviors (auth,step,w8) -> deterministic config

#### install

[https://docs.cypress.io/guides/continuous-integration/introduction#Cypress-Docker-variants] Cypress Docker images.

tools = except, it, describe

```sh
npm install cypress --save-dev
```

package.json

```json
{
  "scripts": {
    "cy:open": "cypress open"
  }
}
```

vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'cypress/support/component.js',
  },
})
```

```sh
npm run cy:open
```

[cypress-vite] https://www.npmjs.com/package/cypress-vite

- uh since vite is faster than web pack

### type of tests

1. auth
2. create articles
3. filter
4. favorite
5. edge case = loading indicator

reduced view

1. privilage / author spec
2. pagination
3. tags
4. match edit delete
5. payload generate article

#### build access to traverse app

#### problems

[] stub request (fixture)
[] static user (real user lol)
[] dynamic user (slow/complex)

```js
// it('GREATS WITH sIGN IN',()=>{

// })

it('links to #/', () => {
  cy.contains('Need an account?').should('have.attr', 'href', '#/')
})

it('require email', () => {
    cy.get('form').contains('').click()
    cy.get('.error-messages').should('contain','email can\'t be blank)
})

it('require password', () => {
    cy.get('[data-test=email]').type('')
    cy.get('.error-messages').should('contain','email can\'t be clank)
})

it('require valid username and password', () => {
    cy.get('[data-test=email]').type('')
    cy.get('[data-test=password]').type('')
    cy.get('.error-messages').should('')
})

// it('no navigate',()=>{
    cy.get('[data-test=email]').type('')
    cy.get('[data-test=password]').type('')
    cy.hash().should('eq','#/')
// })
```

```jsx
describe('/settings', () => {
  beforeEach(() => {
    cy.login() //abstraction, reusable, decoupled

    cy.visit('/#/login')
    cy.get('[data-test=email]').type('')
    cy.get('[data-test=password]').type('')
    cy.hash().should('eq', '#/')

    cy.visit('/#/settings')
  })
})
```

```js
Cypress.Commands.add('login',()=>
cy.get('[data-test]=email').type('')
cy.get('[data-test]=password').type('{enter}')
cy.hash().should('eq','#/')
)

describe('/settings',()=>{
    beforeEach(()=>{
        cy.login()

        cy.visit('/#/settings')
    })

    it('greet with your settings',()=>{
        cy.contains('h1','your settings')
    })
})
```
