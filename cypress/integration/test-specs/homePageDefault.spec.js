import pageDefault from '../../support/page-object/pageDefault';

describe('Home Page Default(before Log in)', () => {
  describe('PRECONDITIONS: Load Home Page', () => {
    it('Visit Home Page and check that the page was loaded', () => {
      pageDefault.load();
    });
  });
});
