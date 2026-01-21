//test
const { test } = require('@playwright/test');
const { Povestidesucces } = require('../pages/Povestidesucces');


test('Accesare Povești de succes din meniu', async ({ page }) => {
const povesti = new Povestidesucces(page);

  await povesti.open();
  await povesti.openPovestiDeSucces();
 
});   