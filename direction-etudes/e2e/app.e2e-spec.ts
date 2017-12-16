import { DirectionEtudesPage } from './app.po';

describe('direction-etudes App', () => {
  let page: DirectionEtudesPage;

  beforeEach(() => {
    page = new DirectionEtudesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
