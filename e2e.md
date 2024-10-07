#

## tdd metrics + 2 types

###

[github] https://github.com/fallowshades/nyGrupp_e-handel/blob/tag-manager/tagmanager.md

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

#### links valid ancor

-resilliant to change

- best practive only test websites in ctrl

```js
// describe('Linked List Navigation Bar', () => {
//   beforeEach(() => {
//     // Visit the page where the linked list exists
//     cy.visit('/');
//   });

//   it('should have a Home link', () => {
//     // Check if the Home link exists and has the correct href attribute
//     cy.contains('Home')
//       .should('have.attr', 'href', '/')
//       .and('be.visible');
//   });

//   it('should have an About Us link', () => {
//     // Check if the About Us link exists
//     cy.contains('About Us')
//       .should('have.attr', 'href', '') // Update this if the href value is defined later
//       .and('be.visible');
//   });

//   it('should have a Contact Us link', () => {
//     // Check if the Contact Us link exists
//     cy.contains('Contact Us')
//       .should('have.attr', 'href', '') // Update this if the href value is defined later
//       .and('be.visible');
//   });

//   it('should have a Tweet button', () => {
//     // Check if the Tweet button exists and contains the correct text
//     cy.get('.twitter-share-button')
//       .should('be.visible')
//       .within(() => {
//         cy.get('span').contains('Tweet');
//       });
//   });

//   it('should have the correct hover styles', () => {
//     // Check hover effect on the navigation links
//     cy.get('li a').first().trigger('mouseover');
//     cy.get('li a').first().should('have.class', 'hover:text-gray-300');
//   });
// });

describe('Linked List Navigation Bar', () => {
  beforeEach(() => {
    // Visit the page where the linked list exists
    cy.visit('/')
  })

  it('should have a Home link', () => {
    // Check if the Home link exists
    cy.get('[data-cy=nav-home]')
      .should('have.attr', 'href', '/')
      .and('be.visible')
  })

  it('should have an About Us link', () => {
    // Check if the About Us link exists
    cy.get('[data-cy=nav-about]')
      .should('have.attr', 'href', '') // Update this if the href value is defined later
      .and('be.visible')
  })

  it('should have a Contact Us link', () => {
    // Check if the Contact Us link exists
    cy.get('[data-cy=nav-contact]')
      .should('have.attr', 'href', '') // Update this if the href value is defined later
      .and('be.visible')
  })

  it('should have a Tweet button', () => {
    // Check if the Tweet button exists
    cy.get('[data-cy=nav-tweet]')
      .should('be.visible')
      .within(() => {
        cy.get('span').contains('Tweet')
      })
  })

  it('should have the correct hover styles', () => {
    // Check hover effect on the navigation links
    cy.get('[data-cy=nav-home]').trigger('mouseover')
    cy.get('[data-cy=nav-home]').should('have.class', 'hover:text-gray-300')
  })
})
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

#### ...

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

```js
describe('test with backend', () => {
  beforeEach('login to the app'),
    () => {
      cy.loginToApplication()
    }
})

it('verify correct request and response', () => {
  cy.server()
  cy.contains('New Article').as('postArticles')

  cy.contains('[formControlname="title"]').type('This is a title')
  cy.get('[formcontrolname="description"]').type('This is a description')
  cy.get('formcontrolname="body"]').type('this is a body of the article')
  cy.contains('Public article').click()

  cy.wait('@postArticles')
  cy.get('@postArticles').then((xhr) => {
    console.log(xhr)
    expect(xhr.status.to.equal(200))
    expect(xh3.status.to.equal(200))
    expect(xhr.request.body.article.body).to.equal(
      'This is the body of the article'
    )
    expect(xhr.response.body.article.description).to.equal(
      'This is a description'
    )
  })
})
```

```js
it('should gave tags with routing object', () => {
  cy.get('.tag-list')
    .should('contain', 'cypress')
    .and('contain', 'automation')
    .and('contain', 'testing')
})

it('verify global feed likes count', () => {
  cy.route('GET', '**/articles/feed*', '{"articles":[],"articlesCount":0')
  cy.route('GET', '**/articles*', 'fixture:articles.json')

  cy.contains('Global feed').click()
  cy.get('app-article-list button').then((listOfButtons) => {
    expect(listOfbuttons[0]).to.contain('1')
    expect(listOfButtons[0]).to.contain('1')
  })
})
```

```js
cy.get('app-article-list button').eq(1).click().should('contain', '6')
```
