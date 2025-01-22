import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';
import fs from 'fs';
import path from 'path';

export class PlaywrightEditKreditPage {
  readonly page: Page;
  readonly EditKredit: Locator;
  readonly cekEditKredit: Locator;
  readonly Cash_Kode: Locator;
  readonly No_KTP: Locator;
  readonly Motor_Kode: Locator;
  readonly Kredit_Tanggal: Locator;
  readonly Fotokopi_KTP: Locator;
  readonly Fotokopi_KK: Locator;
  readonly Fotokopi_Slip_Gaji: Locator;
  readonly SimpanKredit: Locator;
  readonly Kredit_Kode: Locator;

  constructor(page: Page) {
    this.page = page;
    this.EditKredit = page.locator('button', { hasText: 'Edit' });
    this.cekEditKredit = page.locator('h2', { hasText: 'Data Transaksi Kredit' });

    this.No_KTP = page.getByLabel('No. KTP');
    this.Motor_Kode = page.getByLabel('Id Motor')
    this.Kredit_Tanggal = page.getByLabel('Tanggal Pemesanan')
    this.Fotokopi_KTP = page.locator('input[type="file"][name="fotokopi_KTP"]').first();
    this.Fotokopi_KK = page.locator('input[type="file"][name="fotokopi_KK"]').first();
    this.Fotokopi_Slip_Gaji = page.locator('input[type="file"][name="fotokopi_slip_gaji"]').first();

    this.SimpanKredit = page.locator('button', { hasText: 'Simpan' });
  }

  async EditRiwayatKredit() {
    const { faker } = require('@faker-js/faker');
    const No_KTP = faker.string.numeric(10);
    const Motor_Kode = faker.string.numeric(4);
    const Fotokopi_KTP = faker.image.url();
    const Fotokopi_KK = faker.image.url();
    const Fotokopi_Slip_Gaji = faker.image.url();
    const Kredit_Tanggal = faker.date.soon(30).toISOString().split('T')[0];
    const filePath = 'C:\\Users\\user\\Pictures\\c4.jpg';
    const filePath_KK = 'C:\\Users\\user\\Pictures\\c5.jpg';
    const filePath_Gaji = 'C:\\Users\\user\\Pictures\\c2.jpg';

    await this.EditKredit.first().click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/RiwayatPembelianKredit');

    await this.No_KTP.fill(No_KTP);
    await this.Motor_Kode.fill(Motor_Kode);
    await this.Kredit_Tanggal.fill(Kredit_Tanggal);

    await this.Fotokopi_KTP.waitFor({ state: 'visible' });
    await this.Fotokopi_KTP.setInputFiles(filePath);

    await this.Fotokopi_KK.waitFor({ state: 'visible' });
    await this.Fotokopi_KK.setInputFiles(filePath_KK);

    await this.Fotokopi_Slip_Gaji.waitFor({ state: 'visible' });
    await this.Fotokopi_Slip_Gaji.setInputFiles(filePath_Gaji);

    await this.SimpanKredit.first().click();
    await expect(this.cekEditKredit).toBeVisible();
  }
}
