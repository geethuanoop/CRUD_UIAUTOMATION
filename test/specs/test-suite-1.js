describe("UI Crud Operations", () => {
  it("should have the right title", () => {
    browser.url("https://yakkantiraja.github.io/react-crud/");
    expect(browser).toHaveTitle("UI CRUD Operations");
  });

  it("should have the right heading", () => {
    const h1 = $('//h1[contains(text(),"CRUD Operations")]');
    expect(h1).toBeDisplayed();
  });
});
