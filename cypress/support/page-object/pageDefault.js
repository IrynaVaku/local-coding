class HomePage {
  testData = {
    homePage: {
      default: {
        pageTitle: {
          selector: 'h1',
          textHomeDefault: 'Interactive learninglike an adventure',
          textRegistrationPage: 'Create an account',
          textLoginPage: 'Welcome back!',
        },
        navBar: {
          logo: {
            selector: 'a[href="/"]',
            text: 'Local Coding',
            endpoint: '/',
          },
          navMenuLinks: {
            courses:{
              selector: '[data-qa="topmenu-Courses"]',
            text: 'Courses',
            endpoint: '/course',
            },
            interviewQuestions:{
              selector: '[data-qa="Interview Questions"]',
            text: 'Interview Questions',
            endpoint: '/flash',
            },
            diary:{
              selector: '[data-qa="Diary"]',
            text: 'Diary',
            endpoint: '/diary',
            },
            challenges:{
              selector: '[data-qa="Challenges"]',
            text: 'Challenges',
            endpoint: '/challenge',
            },
          },
          buttons: {
            logInBth: {
              selector: '[data-qa="login"]',
              text: 'Login',
              endpoint: '/login',
            },
            signUpBtn: {
              selector: '[data-qa="register"]',
              text: "Get started — it's free",
              endpoint: '/user/register',
            },
          },
        },
      },
      login: {},
    },
  };

  homePageDefaultTitle = () => cy.get(this.testData.homePage.default.selector);
  signUpBtn = () =>
    cy.get(this.testData.homePage.default.navBar.buttons.signUpBtn.selector);
  logInBth = () =>
    cy.get(this.testData.homePage.default.navBar.buttons.logInBth.selector);
  //method Load
  load = () => {
    cy.visit('/').location('pathname').should('eq', '/');
    cy.get(this.testData.homePage.default.pageTitle.selector)
      .first()
      .should('be.visible')
      .should(
        'have.text',
        this.testData.homePage.default.pageTitle.textHomeDefault
      );
  };
}
export default new HomePage();
