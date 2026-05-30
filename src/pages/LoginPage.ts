import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly emailInput = this.page.locator('[data-qa="login-email"]');
  readonly passwordInput = this.page.locator('[data-qa="login-password"]');
  readonly loginButton = this.page.locator('[data-qa="login-button"]');
  readonly loginError = this.page.getByText('Your email or password is incorrect!');
  readonly loggedInLabel = this.page.getByText('Logged in as');

  constructor(private page: Page) {}

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoginError() {
    await expect(this.loginError).toBeVisible();
  }

  async assertLoggedIn() {
    await expect(this.loggedInLabel).toBeVisible();
  }
}
