import { Page } from '@playwright/test';

export class HomePage {
  readonly productsLink = this.page.getByRole('link', { name: 'Products' });
  readonly loginLink = this.page.getByRole('link', { name: ' Signup / Login' });
  readonly homeLink = this.page.getByRole('link', { name: 'Home' });

  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    await this.dismissConsentBanner();
  }

  private async dismissConsentBanner() {
    const consentButton = this.page.getByRole('button', { name: 'Consent' });
    try {
      await consentButton.click({ timeout: 3000 });
    } catch {}
  }

  async navigateToProducts() {
    await this.productsLink.click();
  }

  async navigateToLogin() {
    await this.loginLink.click();
  }

  async isLoaded(): Promise<boolean> {
    return this.homeLink.isVisible();
  }
}
