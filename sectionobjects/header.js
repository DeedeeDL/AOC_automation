const ViewportUtils = require('../utils/viewportdetection');
class Header {
  constructor(page) {
    this.page = page;

    this.headerContainer = this.page.locator("#top-redirect");

    this.logo = this.headerContainer.locator(".img-logo");

    // E ascuns, dar exista pe pagina. doar ca are in css opacity dat la 0
    this.LogoTitle = this.headerContainer.locator(".nav__logo__title");

    
    this.viewport = new ViewportUtils(this.page);

    if(this.viewport.isMobile()){

      this.hamburgerBtn = this.headerContainer.locator("#icon-hamburger");
      this.closeBtn = this.headerContainer.locator("#icon-close");

    }
    

    // Navigation links
    this.navLinks = this.headerContainer.locator(".nav__links__list a");
    this.missionLink = this.headerContainer.locator('a[href="#our-mission"]');
    this.contributeLink = this.headerContainer.locator('a[href="#how-contribute"]');

    // Social links container
    this.socialLinks = this.headerContainer.locator("#socialLinks");
    this.discordSocial = this.socialLinks.locator('a[href*="discord"]');

    // Join button
    this.joinBtn = this.headerContainer.locator(
      '.primary-btn:has-text("Alătură-te")'
    );

  }



  //Metode
  async openHamburgerMenu() {

    if (this.viewport.isMobile()){
      await this.hamburgerBtn.click();
    } 
    
  }

  async closeMenu() {
    if (this.viewport.isMobile()){
      await this.closeBtn.click();
    }
    
  }

  async clickMissionLink() {
    await this.missionLink.click();
  }

  async clickJoinDiscord() {
    await this.joinBtn.click();
  }


  async getNavLinkCount() {
    return await this.navLinks.count();
  }
}


module.exports = Header;


