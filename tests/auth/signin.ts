import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightSignInPage {
  readonly page: Page;
  readonly goToSignin: Locator;
  readonly loginButton: Locator;
  readonly cekLoginPage: Locator;
  readonly toDashboard: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToSignin = page.locator('a', { hasText: 'Sign In' });
    this.cekLoginPage = page.locator('h1', { hasText: 'Selamat Datang di RodaCuan' });
    
    this.emailInput = page.getByLabel('Email');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.locator('button', { hasText: 'Login' });
  }


  async toLoginPage() {
    await this.goToSignin.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/login');
    await expect(this.cekLoginPage).toBeVisible();
  }

  async inputLogin(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async toDashboardPage() {
    await expect(this.toDashboard).toBeVisible();
  }

}