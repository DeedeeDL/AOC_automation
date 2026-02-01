export class HelpingPage {
constructor(page) {
  this.page = page;
  this.search_textbox = page.getByPlaceholder('Caută...');
  this.leftarrow = page.locator('.swiper-button-prev');
  this.rightarrow = page.locator('.swiper-button-next');
  this.emailLink = page.locator('a[href="mailto: aocpeviitor@gmail.com"]');
  this.declaratieLink = page.locator('a[href="https://redirectioneaza.ro/asociatia-oportunitati-si-cariere/" ]');
  this.slide = page.locator('div.how-contribute__job .swiper-slide');
  this.detailsButton = this.slide.getByText('Detalii');
  this.detailsTitle = page.locator('h1');
}

async gotoHelpingPage() {
  await this.page.goto('https://oportunitatisicariere.ro/index.html#how-contribute');
}

    async searchJobs(jobs) {
    for (const job of jobs) {
      // scrie jobul
      await this.search_textbox.fill(job);
      await this.page.waitForTimeout(700);

      // apasă săgeți
      await this.rightarrow.click();
      await this.rightarrow.click();
      await this.leftarrow.click();

      // mică pauză între joburi
      await this.page.waitForTimeout(700);

      // curăță inputul
      await this.search_textbox.clear();
    }
  
}
async clickEmail() {
  await this.emailLink.click();
}

async clickDeclaratie() {
  await this.declaratieLink.click();
}

async getJobsCount() {
  return await this.slides.count();
}

async getJobTitleFromCarousel(index) {
  return (await this.slides.nth(index).locator('h3').innerText()).trim();
}

async clickDetailsForJob(index) {
  await this.slides.nth(index).getByText('Detalii').click();
}

async validateJobDetailsPage(jobTitle) {
  await expect(this.page).toHaveURL(/careers\/.+/);
  await expect(this.detailsTitle).toContainText(jobTitle);
}

async goBackToCarousel() {
  await this.page.goBack();
  await expect(this.slides.first()).toBeVisible();
}
}
