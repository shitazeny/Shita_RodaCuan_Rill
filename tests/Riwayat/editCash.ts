import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';

export class PlaywrightEditCashPage {
  readonly page: Page;
  readonly EditCash: Locator;
  readonly cekEditCash: Locator;
  readonly Cash_Kode: Locator;
  readonly No_KTP: Locator;
  readonly Motor_Kode: Locator;
  readonly Cash_Tanggal: Locator;
  readonly Cash_Bayar: Locator;
  readonly BeliCashButton: Locator;
  readonly SimpanCash: Locator;

  constructor(page: Page) {
    this.page = page;
    this.EditCash = page.locator('button', { hasText: 'Edit' });
    this.cekEditCash = page.locator('h2', { hasText: 'Data Transaksi Cash' });

    this.No_KTP = page.getByLabel('No. KTP');
    this.Motor_Kode = page.getByLabel('Id Motor');
    this.Cash_Tanggal = page.getByLabel('Tanggal Pemesanan');
    this.Cash_Bayar = page.getByLabel('Bayar');
    this.BeliCashButton = page.locator('button', { hasText: 'Pesan Cash' });

    this.SimpanCash = page.locator('button', { hasText: 'Simpan' });
  }


  async EditRiwayatCash(cash_tanggal: Date, cash_bayar: number) {
    const No_KTP = faker.string.numeric(10);
    const Motor_Kode = faker.string.numeric(4);

    await this.EditCash.first().click();

    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/RiwayatPembelian');
    await this.No_KTP.fill(No_KTP);
    await this.Motor_Kode.fill(Motor_Kode);
    
    const formattedDate = cash_tanggal.toISOString().split('T')[0]; 
    const formattedCashBayar = cash_bayar.toString();

    await this.Cash_Tanggal.fill(formattedDate);
    await this.Cash_Bayar.fill(formattedCashBayar);

    await this.SimpanCash.first().click();
    await expect(this.cekEditCash).toBeVisible();
  }
}