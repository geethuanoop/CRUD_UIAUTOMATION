import { BASE_URL, LOCATORS } from '../test-config';

const clearAllFields = () => {
  $(LOCATORS.INPUT_NAME).clearValue();
  browser.pause(500);
  $(LOCATORS.INPUT_USERNAME).clearValue();
  browser.pause(500);
};

const handleAlert = () => {
  const isOpen = browser.isAlertOpen();
  expect(isOpen).toBeTruthy();

  if (isOpen) {
    const alertText = browser.getAlertText();
    expect(alertText).toEqual('please fill all details');
    browser.pause(500);
    browser.acceptAlert();
  }

  browser.pause(500);
};

describe('CRUD functionality validation', () => {
  // it('should show existing records - read operation', () => {
  //   browser.url(BASE_URL);
  //   const tableRows = $$('//tbody/tr');
  //   expect(tableRows.length).toEqual(3);
  // });

  // it('disallow adding invalid data (no data provided) - create operation', () => {
  //   handleAlert();
  // });

  // it('disallow adding invalid data (entered spaces) - create operation', () => {
  //   $(LOCATORS.INPUT_NAME).addValue('   ');
  //   $(LOCATORS.INPUT_USERNAME).addValue('   ');
  // $(LOCATORS.BUTTON_ADD).click();
  //   handleAlert();
  // });

  // it('disallow adding invalid data (Only name provided) - create operation', () => {
  //   browser.url(BASE_URL);
  //   $(LOCATORS.INPUT_NAME).addValue('name1');
  //   $(LOCATORS.BUTTON_ADD).click();
  //   handleAlert();
  //   browser.pause(500);
  // });

  // it('disallow adding invalid data (Only user name provided) - create operation', () => {
  //   browser.url(BASE_URL);
  //   $(LOCATORS.INPUT_USERNAME).addValue('username1');
  //   $(LOCATORS.BUTTON_ADD).click();
  //   handleAlert();
  // });

  // it('create valid data - create operation', () => {
  //   browser.url(BASE_URL);
  //   const initialCount = $$('//tbody/tr').length;
  //   browser.pause(500);
  //   $(LOCATORS.INPUT_NAME).addValue('name2');
  //   browser.pause(500);
  //   $(LOCATORS.INPUT_USERNAME).addValue('username2');
  //   browser.pause(500);
  //   $(LOCATORS.INPUT_LANGUAGE).selectByAttribute('value', 'Java');
  //   browser.pause(500);
  //   $(LOCATORS.BUTTON_ADD).click();
  //   browser.pause(500);
  //   const newCount = $$('//tbody/tr').length;
  //   expect(newCount).toEqual(initialCount + 1);
  // });

  // it('validate delete operation', () => {
  //   browser.url(BASE_URL);
  //   browser.pause(500);
  //   const initialCount = $$('//tbody/tr').length;
  //   $(LOCATORS.BUTTON_DELETE).click();
  //   browser.pause(500);
  //   const newCount = $$('//tbody/tr').length;
  //   expect(newCount).toEqual(initialCount - 1);
  // });

  // it('edit button should update the row when valid data entered and update button is clicked- update operation -', () => {
  //   browser.url(BASE_URL);
  //   const newInputText = 'testdata1';
  //   $(LOCATORS.BUTTON_EDIT).click();
  //   browser.pause(500);
  //   $(LOCATORS.INPUT_USERNAME).clearValue();
  //   browser.pause(500);
  //   $(LOCATORS.INPUT_USERNAME).addValue(newInputText);
  //   $(LOCATORS.BUTTON_UPDATE).click();
  //   browser.pause(500);
  //   const currentText = $('//tbody/tr[1]/td[2]').getText();
  //   expect(currentText).toEqual(newInputText);
  // });

  // it('row data remain unchanged upon clicking cancel button - update operation -', () => {
  //   browser.url(BASE_URL);
  //   const currentText = $('//tbody/tr[1]/td[2]').getText();
  //   const newInputText = 'testdata2';
  //   $(LOCATORS.BUTTON_EDIT).click();
  //   browser.pause(500);
  //   $(LOCATORS.INPUT_USERNAME).clearValue();
  //   browser.pause(500);
  //   $(LOCATORS.INPUT_USERNAME).addValue(newInputText);
  //   $(LOCATORS.BUTTON_CANCEL).click();
  //   browser.pause(500);
  //   expect(currentText).toEqual($('//tbody/tr[1]/td[2]').getText());
  // });

  // it('disallow updating user when any input field is empty - update operation -', () => {
  //   browser.url(BASE_URL);
  //   $(LOCATORS.BUTTON_EDIT).click();
  //   browser.pause(500);
  //   $(LOCATORS.INPUT_NAME).clearValue();
  //   browser.pause(500);
  //   $(LOCATORS.INPUT_USERNAME).clearValue();
  //   browser.pause(500);
  //   $(LOCATORS.BUTTON_UPDATE).click();
  //   browser.pause(500);
  //   handleAlert();
  // });

  it('disallow updating user when language is not choosen from the dropdown - update operation -', () => {
    browser.url(BASE_URL);
    $(LOCATORS.BUTTON_EDIT).click();
    browser.pause(500);
    $(LOCATORS.INPUT_LANGUAGE).selectByAttribute('value', 'select');
    browser.pause(500);
    $(LOCATORS.BUTTON_UPDATE).click();
    browser.pause(500);

    expect(browser.isAlertOpen()).toBeTruthy();
  });
});
