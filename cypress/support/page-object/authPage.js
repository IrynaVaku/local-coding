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
}
export default new AuthPage();
