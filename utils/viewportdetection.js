class ViewportUtils {
  constructor(page) {
    this.page = page;
  }
  
  isMobile() {
    const viewport = this.page.viewportSize();
    return viewport.width < 1283;
  }
  
  isDesktop() {
    return !this.isMobile();
  }
}

module.exports = ViewportUtils;
