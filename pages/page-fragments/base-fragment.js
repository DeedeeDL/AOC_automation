const ViewportUtils = require('../../utils/viewport-detection');


class BaseFragment {
  
  constructor(page) {
    this.page = page;
    this.viewportUtils = new ViewportUtils(page);
  }
  
  async click(locator) {
    await locator.click();
  }

  async scrollIntoView(locator) {
    await locator.scrollIntoViewIfNeeded();
  }


  async getText(locator) {
    return await locator.textContent();
  }

 
  async isVisible(locator) {
    return await locator.isVisible();
  }


  async waitForVisible(locator) {
    await locator.waitFor({ state: 'visible' });
  }

 
  async waitForHidden(locator) {
    await locator.waitFor({ state: 'hidden' });
  }

  
  getLocator(selector) {
    if (this.root) {
      return this.root.locator(selector);
    }
    return this.page.locator(selector);
  }


  isMobile() {
    return this.viewportUtils.isMobile();
  }

 
  isDesktop() {
    return this.viewportUtils.isDesktop();
  }
}

module.exports = BaseFragment;