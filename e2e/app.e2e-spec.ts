import { PartyHulchulUiPage } from './app.po';

describe('ph-ui App', function() {
  let page: PartyHulchulUiPage;

  beforeEach(() => {
    page = new PartyHulchulUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    //expect(page.getParagraphText()).toEqual('app works!');
  });
});
