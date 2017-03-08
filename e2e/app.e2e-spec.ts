import { SellPage } from './app.po';

describe('sell App', function() {
  let page: SellPage;

  beforeEach(() => {
    page = new SellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
