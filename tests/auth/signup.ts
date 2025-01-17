import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightSignUpPage {
  readonly page: Page;
  readonly goToSignup: Locator;
  readonly cekRegisterPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToSignup = page.locator('a', { hasText: 'Sign Up' });
    this.cekRegisterPage = page.locator('h1', { hasText: 'Bergabung Bersama RodaCuan' });
  }

  async toRegisterPage() {
    await this.goToSignup.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/register');
    await expect(this.cekRegisterPage).toBeVisible();
  }

}