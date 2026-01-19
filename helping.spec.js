import { test, expect } from '@playwright/test';
import { HelpingPage } from '../../pages/helping'

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
  await expect(helping.emailLink).toHaveAttribute('href', 'mailto:contact@site.ro');
});
