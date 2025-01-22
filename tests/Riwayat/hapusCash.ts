import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightHapusCashPage {
  readonly page: Page;
  readonly HapusCash: Locator;
  readonly cekHapusCash: Locator;
  readonly Cash_Kode: Locator;
  readonly confirmButtonCash: Locator;

  constructor(page: Page) {
    this.page = page;
    this.HapusCash = page.locator('button', { hasText: 'Hapus' });
    this.cekHapusCash = page.locator('h2', { hasText: 'Data Transaksi Cash' });
    this.confirmButtonCash = page.locator('.swal2-confirm');
  }

  async HapusRiwayatCash() {
    await this.HapusCash.last().click();
    await this.confirmButtonCash.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/RiwayatPembelian');
    await expect(this.cekHapusCash).toBeVisible();
  }
}