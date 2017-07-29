const { constants, By, until } = require('../setup-selenium');

const { id, title, timeout } = constants;

const create = (driver, collectionName) => {
  return driver.findElement(By
    .id(id.btnColCreate))
    .click()
      .then(() => {
        return driver.wait(until
          .titleContains(title.collCreateTitle), timeout);
      })
      .then(() => {
        return driver.findElement(By
          .id(id.tbColCreate))
          .sendKeys(collectionName);
      })
      .then(() => {
        return driver.findElement(By
          .id(id.cbColPrivate))
          .click();
      })
      .then(() => {
        return driver.findElement(By
          .id(id.btnColSubmit))
          .click();
      });
};

const add = (driver, movieId) => {

};

const filter = (driver, ...genres) => {

};

module.exports = {
  create,
  add,
  filter,
};
