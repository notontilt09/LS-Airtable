const {Builder, By, Key, until} = require('selenium-webdriver');
require('chromedriver');

const name = '';  // YOUR NAME HERE

(async function example() {
  let driver = new Builder().forBrowser('chrome').build();
    try {
    await driver.get('https://airtable.com/shr8ZYuNjevMLRsxI');
    let student = driver.wait(until.elementLocated(By.className('addRecordSelector')), 5000)
    student.click();
    let input = driver.wait(until.elementLocated(By.className('py2')), 5000)
    input.sendKeys(name);
    let me = driver.wait(until.elementLocated(By.className('rowSuggestion')), 20000)
    me.click()
  } finally {
    // fill out the rest of the form you bum
  }
})();