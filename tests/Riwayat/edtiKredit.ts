import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';

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

    // this.No_KTP = page.getByLabel('No. KTP');
    // this.Motor_Kode = page.getByLabel('Id Motor');
    // this.Kredit_Tanggal = page.getByLabel('Tanggal Pemesanan');
    // this.Fotokopi_KTP = page.getByLabel('Fotokopi KTP');
    // this.Fotokopi_KK = page.getByLabel('Fotokopi Kartu Keluarga');
    // this.Fotokopi_Slip_Gaji = page.getByLabel('Fotokopi Slip Gaji');

    this.SimpanKredit = page.locator('button', { hasText: 'Simpan' });
  }

  async EditRiwayatKredit(kridit_tanggal: Date) {
    const No_KTP = faker.string.numeric(10);
    const Motor_Kode = faker.string.numeric(4);
    const Fotokopi_KTP = faker.image.url();
    const Fotokopi_KK = faker.image.url();
    const Fotokopi_Slip_Gaji = faker.image.url();

    await this.EditKredit.first().click();
    const formattedDateKredit = kridit_tanggal.toISOString().split('T')[0]; 

    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/RiwayatPembelianKredit');

    await this.page.locator('div.modal:has(input[name="kridit_tanggal"])').first().locator('input[name="kridit_tanggal"]').fill(formattedDateKredit);

    await this.No_KTP.fill(No_KTP);
    await this.Motor_Kode.fill(Motor_Kode);
    await this.Fotokopi_KTP.fill(Fotokopi_KTP);
    await this.Fotokopi_KK.fill(Fotokopi_KK);
    await this.Fotokopi_Slip_Gaji.fill(Fotokopi_Slip_Gaji);

    await this.SimpanKredit.first().click();
    await expect(this.cekEditKredit).toBeVisible();
  }
}