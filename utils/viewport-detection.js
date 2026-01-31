class ViewportUtils {
  constructor(page) {
    this.page = page;
  }
  
  isMobile() {
    const viewport = this.page.viewportSize();
    if (!viewport) return false; // Default to desktop if viewport is null
    return viewport.width < 1283;
  }
  
  isDesktop() {
    return !this.isMobile();
  }
}

export default ViewportUtils;
