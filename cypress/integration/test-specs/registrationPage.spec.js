import authPage from '../../support/page-object/authPage';
import pageDefault from '../../support/page-object/pageDefault';

describe('Registration Page - Main Page Elements', () => {
  describe('PRECONDITIONS: Load Register Page', () => {
    it('Visit Register Page and check that the page was loaded', () => {
      pageDefault.load();
    });
    it('Click Registration Button', () => {
      pageDefault.signUpBtn().click();
    });
    it('Checking that page was loaded successfuly', () => {
      cy.location('pathname').should(
        'eq',
        pageDefault.testData.homePage.default.navBar.buttons.signUpBtn.endpoint
      );
    });
  });
  describe('Checking Page Title', () => {
    it('Checking Page Title exist and be visible', () => {
      cy.get(pageDefault.testData.homePage.default.pageTitle.selector).should(
        'be.visible'
      );
    });
    it(`Checking Page Title has text '${pageDefault.testData.homePage.default.pageTitle.textRegistrationPage}' `, () => {
      cy.get(pageDefault.testData.homePage.default.pageTitle.selector).should(
        'have.text',
        pageDefault.testData.homePage.default.pageTitle.textRegistrationPage
      );
    });
  });
  describe('Checking Input Fields', () => {
    it('Checking First Name Field', () =>
      authPage.checkFirstName(
        authPage.pageElem.registrationPage.inputField.firstName
      ));
    it('Checking Last Name Field', () =>
      authPage.checkFirstName(
        authPage.pageElem.registrationPage.inputField.lastName
      ));
    // This 2 its replaces all tests below//
    /* it('Checking First Name Field', () => {
      cy.get(
        authPage.pageElem.registrationPage.inputField.firstName.selector
      ).should('be.visible');
    });
    it(`Checking First Name Field Has Placeholder '${authPage.pageElem.registrationPage.inputField.firstName.label}' `, () => {
      cy.get(
        authPage.pageElem.registrationPage.inputField.firstName.selector
      ).should(
        'have.attr','placeholder',
        authPage.pageElem.registrationPage.inputField.firstName.label
      );
    });
    it('Checking Last Name Field', () => {
      cy.get(
        authPage.pageElem.registrationPage.inputField.lastName.selector
      ).should('be.visible');
    });
    it(`Checking Last Name Field Has Placeholder '${authPage.pageElem.registrationPage.inputField.lastName.label}' `, () => {
      cy.get(
        authPage.pageElem.registrationPage.inputField.lastName.selector
      ).should(
        'have.attr','placeholder',
        authPage.pageElem.registrationPage.inputField.lastName.label
      );
    });*/
  });
});
