import { Page, expect } from '@playwright/test';

export class ProductsPage {
  readonly searchInput = this.page.locator('#search_product');
  readonly searchButton = this.page.locator('#submit_search');
  readonly firstProduct = this.page.locator('.productinfo').first();
  readonly firstProductAddToCart = this.firstProduct.getByText('Add to cart');
  readonly continueShoppingButton = this.page.getByRole('button', { name: 'Continue Shopping' });
  readonly viewCartLink = this.page.locator('a[href="/view_cart"]').filter({ hasText: 'View Cart' });
  readonly searchResultsHeading = this.page.getByText('Searched Products');
  readonly firstProductName = this.page.locator('.productinfo p').first();

  constructor(private page: Page) {}

  async searchProduct(name: string) {
    await this.searchInput.fill(name);
    await this.searchButton.click();
  }

  async addFirstProductToCart() {
    await this.firstProduct.hover();
    await this.firstProductAddToCart.click();
  }

  async continueShoppingAfterAdd() {
    await this.continueShoppingButton.click();
  }

  async goToCart() {
    await this.page.goto('/view_cart', { waitUntil: 'domcontentloaded' });
  }

  async assertSearchResultsVisible(productName: string) {
    await expect(this.searchResultsHeading).toBeVisible();
    await expect(this.firstProductName).toContainText(productName);
  }
}
