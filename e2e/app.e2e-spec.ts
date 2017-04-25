import { DemoDatePickerPage } from './app.po';

describe('demo-date-picker App', () => {
  let page: DemoDatePickerPage;

  beforeEach(() => {
    page = new DemoDatePickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
