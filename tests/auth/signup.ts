import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightSignUpPage {
  readonly page: Page;
  readonly goToSignup: Locator;
  readonly cekRegisterPage: Locator;
  readonly NamaLengkap: Locator;
  readonly Email: Locator;
  readonly Password: Locator;
  readonly RegisButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToSignup = page.locator('a', { hasText: 'Sign Up' });
    this.cekRegisterPage = page.locator('h1', { hasText: 'Bergabung Bersama RodaCuan' });

    this.NamaLengkap = page.getByLabel('Nama Lengkap');
    this.Email = page.getByLabel('Email');
    this.Password = page.getByLabel('Password');

    this.RegisButton = page.locator('button', { hasText: 'Register' });
  }

  async toRegisterPage() {
    await this.goToSignup.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/register');
    await expect(this.cekRegisterPage).toBeVisible();
  }

//   async inputRegis(name: string, email: string, password: string) {
//     await this.NamaLengkap.fill(name);
//     await this.Email.fill(email);
//     await this.page.getByLabel('Password', { exact: true }).fill(password); 
//     await this.RegisButton.click();
// }

}