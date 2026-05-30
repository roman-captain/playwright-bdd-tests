import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly proceedToCheckoutButton = this.page.getByText('Proceed To Checkout');
  readonly registerLoginLink = this.page.getByRole('link', { name: 'Register / Login' });
  readonly cartRows = this.page.locator('#cart_info_table tbody tr');
  readonly cartProductName = this.page.locator('.cart_description h4 a');
  readonly productPrice = this.page.locator('.cart_price p').first();
  readonly totalPrice = this.page.locator('.cart_total_price').first();

  constructor(private page: Page) {}

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }

  async continueAsGuest() {
    await this.registerLoginLink.click();
  }

  async assertCartNotEmpty() {
    await expect(this.cartRows).toHaveCount(1);
  }

  async assertProductInCart(productName: string) {
    await expect(this.cartProductName).toContainText(productName);
  }

  async getProductPrice(): Promise<string> {
    return (await this.productPrice.innerText()).trim();
  }

  async getTotalPrice(): Promise<string> {
    return (await this.totalPrice.innerText()).trim();
  }
}
