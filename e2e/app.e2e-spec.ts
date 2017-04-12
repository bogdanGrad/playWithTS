import { PlayWithTSPage } from './app.po';

describe('play-with-ts App', () => {
  let page: PlayWithTSPage;

  beforeEach(() => {
    page = new PlayWithTSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
