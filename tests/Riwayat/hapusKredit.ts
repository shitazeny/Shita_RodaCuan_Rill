import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightHapusKreditPage {
  readonly page: Page;
  readonly HapusKredit: Locator;
  readonly cekHapusKredit: Locator;
  readonly Cash_Kode: Locator;
  readonly confirmButtonKredit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.HapusKredit = page.locator('button', { hasText: 'Hapus' });
    this.cekHapusKredit = page.locator('h2', { hasText: 'Data Transaksi Kredit' });
    this.confirmButtonKredit = page.locator('.swal2-confirm');
  }

  async HapusRiwayatKredit() {
    await this.HapusKredit.first().click();
    await this.confirmButtonKredit.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/RiwayatPembelianKredit');
    await expect(this.cekHapusKredit).toBeVisible();
  }
}