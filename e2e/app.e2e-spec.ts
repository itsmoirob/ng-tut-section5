import { Section5Page } from './app.po';

describe('section5 App', () => {
  let page: Section5Page;

  beforeEach(() => {
    page = new Section5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
