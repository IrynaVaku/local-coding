///<reference types="cypress" />;

class AuthPage {
  pageElem = {
    commonEl: {
      inputField: {
        email: {
          selectorRegister: 'input#user_login_email',
          selectorLogin: 'input#normal_login_email',
          placeHolder: 'Email',
        },
        password: {
          selectorRegister: 'input#user_login_password',
          selectorLogin: 'input#normal_login_password',
          placeHolder: 'Password',
        },
        btnSubmit: {
          selector: 'button[type="submit"]',
          labelRegister: 'Register',
          labelLogin: 'Log in',
        },
      },
    },
    registrationPage: {
      inputField: {
        firstName: {
          selector: 'input#user_login_firstName',
          label: 'First Name',
        },
        lastName: {
          selector: 'input#user_login_lastName',
          label: 'Last Name',
        },
        country: {
          selector: 'span[class="ant-select-selection-item"]',
          titleDefault: 'United States',
          selectorCountry: 'div[title=""]',
          titleToCheck: 'Ukraine',
        },
      },
    },
    loginPage: {},
  };
  //methods
  checkFirstName = (nameObject) => {
    cy.get(nameObject.selector)
      .should('be.visible')
      .should('have.attr', 'placeholder', nameObject.label);
  };
  checkInputValue = (title) => {
    cy.get(`span[title="${title}"]`).should('be.visible');
  };
  changeInputValueToRandomFromList = () => {
    const countries = [];
    cy.get('span[title]').click();
    cy.get('div[class=rc-virtual-list-holder-inner]')
      .children()
      .each((el) => {
        countries.push(el[0].innerText);
        if (countries.length === 11) {
          const randomTitle =
            countries[Math.floor(Math.random() * countries.length)];
          cy.get(`div[title="${randomTitle}"]`).click();
          this.checkInputValue(randomTitle);
        }
      });
  };
}
export default new AuthPage();
