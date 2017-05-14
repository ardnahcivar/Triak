import { TriakPage } from './app.po';

describe('triak App', () => {
  let page: TriakPage;

  beforeEach(() => {
    page = new TriakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
