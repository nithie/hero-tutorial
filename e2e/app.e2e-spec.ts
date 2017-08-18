import { HeroTutorialPage } from './app.po';

describe('hero-tutorial App', () => {
  let page: HeroTutorialPage;

  beforeEach(() => {
    page = new HeroTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
