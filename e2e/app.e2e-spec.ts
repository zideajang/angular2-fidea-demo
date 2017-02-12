import { Angular2FideaDemoPage } from './app.po';

describe('angular2-fidea-demo App', function() {
  let page: Angular2FideaDemoPage;

  beforeEach(() => {
    page = new Angular2FideaDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
