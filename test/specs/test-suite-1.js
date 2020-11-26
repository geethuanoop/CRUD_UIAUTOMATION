import { BASE_URL, LOCATORS } from '../test-config';

describe('UI page content validation', () => {
  it('should have the right website title', () => {
    browser.url(BASE_URL);
    browser.maximizeWindow();
    expect(browser).toHaveTitle('UI CRUD Operations');
  });

  it('should have the right main heading - CRUD Operations', () => {
    const h1 = $(LOCATORS.MAIN_HEADING);
    expect(h1).toBeDisplayed();
  });

  it('should have the right subheading - Add user', () => {
    const h1 = $(LOCATORS.SUB_HEADING1);
    expect(h1).toBeDisplayed();
  });

  it('should have the right sub heading - View users', () => {
    const h1 = $(LOCATORS.SUB_HEADING2);
    expect(h1).toBeDisplayed();
  });
});
