export const BASE_URL = 'https://yakkantiraja.github.io/react-crud/';
export const TITLE = 'UI CRUD Operations';

export const LOCATORS = {
  MAIN_HEADING: '//h1[contains(text(),"CRUD Operations")]',
  SUB_HEADING1: '//h2[contains(text(),"Add user")]',
  SUB_HEADING2: '//h2[contains(text(),"View users")]',
  BUTTON_ADD: '//button[contains(text(),"Add new user")]',
  INPUT_NAME: '//input[@name="name"]',
  INPUT_USERNAME: '//input[@name="username"]',
  INPUT_LANGUAGE: '//select[@name="lang"]',
  TABLE_ROWS: '//tbody/tr',
  BUTTON_EDIT: '//tbody/tr[1]/td[4]/button[1]',
  BUTTON_DELETE: '//tbody/tr[1]/td[4]/button[2]',
  BUTTON_UPDATE: '//button[contains(text(),"Update user")]',
  BUTTON_CANCEL: '//button[contains(text(),"Cancel")]',
};
