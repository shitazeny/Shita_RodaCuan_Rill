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

    this.No_KTP = page.locator('input[name="pembeli_No_KTP"]');
    this.Motor_Kode = page.locator('input[name="motor_kode"]');
    this.Kredit_Tanggal = page.locator('input[name="kridit_tanggal"]');
    this.Fotokopi_KTP = page.locator('input[name="fotokopi_KTP"]');
    this.Fotokopi_KK = page.locator('input[name="fotokopi_KK"]');
    this.Fotokopi_Slip_Gaji = page.locator('input[name="fotokopi_slip_gaji"]');

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

    await this.EditKredit.first().click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/RiwayatPembelianKredit');

    await this.No_KTP.fill(No_KTP);
    await this.Motor_Kode.fill(Motor_Kode);
    await this.Kredit_Tanggal.fill(Kredit_Tanggal);
    await this.Fotokopi_KTP.fill(Fotokopi_KTP);
    await this.Fotokopi_KK.fill(Fotokopi_KK);
    await this.Fotokopi_Slip_Gaji.fill(Fotokopi_Slip_Gaji);

    await this.SimpanKredit.first().click();
    await expect(this.cekEditKredit).toBeVisible();
  }
}
