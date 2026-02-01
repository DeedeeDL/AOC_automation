import { test, expect } from '@playwright/test';
import { HelpingPage } from '../pages/page-fragments/helping';

test('Caută joburi și apasă săgețile', async ({ page }) => {
  const helping = new HelpingPage(page);

  await helping.gotoHelpingPage();

  await helping.searchJobs([
    'Tester',
    'Developer',
    'Automation'
  ]);

});


test('Link email este clickable', async ({ page }) => {
  const helping = new HelpingPage(page);
  await helping.gotoHelpingPage();
  await helping.clickEmail();
  await expect(helping.emailLink).toHaveAttribute('href', 'mailto: aocpeviitor@gmail.com');
});
test('Link Declaratie este clickable', async ({ page }) => {
  const helping = new HelpingPage(page);
  await helping.gotoHelpingPage();
  await helping.clickDeclaratie();
  await expect(helping.declaratieLink).toHaveAttribute('href', 'https://redirectioneaza.ro/asociatia-oportunitati-si-cariere/');
});

test('Titlul jobului din carusel apare corect în pagina de detalii', async ({ page }) => {
  const helping = new HelpingPage(page);
  await helping.gotoHelpingPage();

  const slideSelector = 'div.how-contribute__job .swiper-slide';
  const detailsSelector = `${slideSelector} >> text=Detalii`;

  const count = await page.locator(detailsSelector).count();

  for (let i = 0; i < count; i++) {
    const slide = page.locator(slideSelector).nth(i);

    // 🔹 1. ia titlul jobului din carusel
    const jobTitle = (await slide.locator('h3').innerText()).trim();

    // 🔹 2. click pe Detalii
    await slide.locator('text=Detalii').click();

    // 🔹 3. validează URL
    await expect(page).toHaveURL(/careers\/.+/);

    // 🔹 4. validează titlul jobului
    const detailsTitle = page.locator('h1');
    await expect(detailsTitle).toContainText(jobTitle);

    // 🔹 5. revino la carusel
    await page.goBack();
    await expect(page.locator(slideSelector).first()).toBeVisible();
  }
});
