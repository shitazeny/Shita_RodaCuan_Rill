import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';

export class PlaywrightDetailProdukPage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly cekHeader: Locator;
  readonly navbar: Locator;
  readonly navbarLinks: { [key: string]: Locator };
  readonly HomeHeader: Locator;
  readonly potoSwipe: Locator;
  readonly motorCard: Locator;
  readonly recruitmentTable: Locator;
  readonly beliButton: Locator;
  readonly cekBeliButton: Locator;
  readonly cekBeliPage: Locator;
  readonly formCash: Locator;
  readonly closeForm: Locator;
  readonly formKredit: Locator;
  readonly closeFormKredit: Locator;
  readonly cekHomeMenu: Locator;
  readonly cekMotorBaru: Locator;
  readonly cekBaruPage: Locator;
  readonly cekMotorBekas: Locator;
  readonly cekBekasPage: Locator;
  readonly CetakLinks: { [key: string]: Locator };;
  readonly ButtonGroup: Locator;
  readonly cekMotorListrik: Locator;
  readonly cekListrikPage: Locator;
  readonly cekBantuan: Locator;
  readonly cekClickProfil: Locator;
  readonly cekProfilePage: Locator;
  readonly cekClickRiwayat: Locator;
  readonly cekClickLogout: Locator;
  readonly cekRiwayatPage: Locator;
  readonly cekRiwayatKreditPage: Locator;
  readonly ButtonRiwayatKredit: Locator;
  readonly cekLoginPage: Locator;
  readonly cekCashCetakPDF: Locator;
  readonly finalCashPDF: Locator;
  readonly Cash_Kode: Locator;
  readonly No_KTP: Locator;
  readonly Motor_Kode: Locator;
  readonly Cash_Tanggal: Locator;
  readonly Cash_Bayar: Locator;
  readonly BeliCashButton: Locator;
  readonly YaPesanButton: Locator;
  readonly SetelahYaPesanButton: Locator;
  readonly Paket_Kode: Locator;
  readonly Paket_Harga_Cash: Locator;
  readonly Paket_Uang_Muka: Locator;
  readonly Paket_Jumlah_Cicilan: Locator;
  readonly Paket_Bunga: Locator;
  readonly Paket_Nilai_Cicilan: Locator;
  readonly Kredit_Kode: Locator;
  readonly Pembeli_No_KTP: Locator;
  readonly Motor_KodeKredit: Locator;
  readonly Kredit_Tanggal: Locator;
  readonly Fotokopi_KTP: Locator;
  readonly Fotokopi_KK: Locator;
  readonly Fotokopi_Slip_Gaji: Locator;
  readonly LanjutkanButton: Locator;
  readonly LamanKreditSelanjutnya: Locator;
  readonly PesanKreditButton: Locator;
  readonly YaPesanKredit: Locator;
  readonly SetelahYaPesanKredit: Locator;
  readonly MenujuPopUp2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator('button', { hasText: 'Login' });
    this.cekHeader = page.locator('h2').filter({ hasText: /Motor Baru Paling Laris/i });

    //Detail Motor
    this.cekBeliButton = page.locator('h3', { hasText: 'Detail Produk' });
    this.ButtonGroup = page.locator('.product-header');
    this.CetakLinks = {
      Cetak: this.ButtonGroup.locator('a.btn-warning.dropdown-toggle', { hasText: 'Cetak' }),
      CetakCash: this.ButtonGroup.locator('a', { hasText: 'Cetak Pembelian Cash' }),
      CetakKredit: this.ButtonGroup.locator('a', { hasText: 'Cetak Pembelian Kredit' }),
    };
    this.cekCashCetakPDF = page.getByLabel('Cetak').getByRole('link', { name: 'Bukti Pemesanan Motor' });
    this.finalCashPDF = page.locator('h1', { hasText: 'Bukti Pemesanan Motor' });

    //Cash
    this.formCash = page.locator('a', { hasText: 'Bayar Cash' });
    this.closeForm = page.locator('#modalCashBaru button[type="button"].btn-close[data-bs-dismiss="modal"][aria-label="Close"]');

    //Kredit
    this.formKredit = page.locator('a', { hasText: 'Bayar Kredit' });
    this.closeFormKredit = page.locator('#modalKreditBaru button[type="button"].btn-close[data-bs-dismiss="modal"][aria-label="Close"]');

    //Input Pembelian Motor Cash
    this.Cash_Kode = page.getByLabel('Id Cash');
    this.No_KTP = page.getByLabel('No. KTP');
    this.Motor_Kode = page.getByLabel('Id Motor');
    this.Cash_Tanggal = page.getByLabel('Tanggal Pemesanan Cash');
    this.Cash_Bayar = page.getByLabel('Bayar');
    this.BeliCashButton = page.locator('button', { hasText: 'Pesan Cash' });

    this.YaPesanButton = page.locator('.swal2-confirm');
    this.SetelahYaPesanButton = page.locator('h3', { hasText: 'Detail Produk' });

    //Input Pembelian Motor Kredit
    //Paket Kredit
    this.Paket_Kode = page.getByLabel('Id Paket');
    this.Paket_Harga_Cash = page.getByLabel('Harga');
    this.Paket_Uang_Muka = page.getByLabel('Uang Muka');
    this.Paket_Jumlah_Cicilan = page.getByLabel('Jumlah Cicilan');
    this.Paket_Bunga = page.getByLabel('Bunga (%)');
    this.Paket_Nilai_Cicilan = page.getByLabel('Angsuran');

    this.LanjutkanButton = page.locator('button', { hasText: 'Lanjutkan' });
    this.LamanKreditSelanjutnya = page.locator('div.form-footer button.payment-button.previous-step', { hasText: 'Kembali' });

    this.Kredit_Kode = page.getByLabel('Id Kredit');
    this.Pembeli_No_KTP = page.getByLabel('No. KTP');
    this.Motor_KodeKredit = page.getByLabel('Id Motor');
    this.Kredit_Tanggal = page.getByLabel('Tanggal Pemesanan');
    this.Fotokopi_KTP = page.getByLabel('Foto KTP');
    this.Fotokopi_KK = page.getByLabel('Foto Kartu Keluarga');
    this.Fotokopi_Slip_Gaji = page.getByLabel('Foto Slip Gaji');

    this.PesanKreditButton = page.locator('button', { hasText: 'Pesan Kredit' });
    this.YaPesanKredit = page.locator('.swal2-confirm');
    this.SetelahYaPesanKredit = page.locator('h3', { hasText: 'Detail Produk' });
    this.MenujuPopUp2 = page.locator('.form-group').filter({ hasText: 'Id Kredit' });
  }

  async BuyingMotorCash(cash_tanggal: Date, cash_bayar: number) {
    const Cash_Kode = faker.string.numeric(4);
    const No_KTP = faker.string.numeric(10);
    const Motor_Kode = faker.string.numeric(4);
   
    await this.formCash.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/motorbaru_desk');
    await this.closeForm.waitFor({ state: 'visible' });
    await this.Cash_Kode.fill(Cash_Kode);
    await this.No_KTP.fill(No_KTP);
    await this.Motor_Kode.fill(Motor_Kode);
    
    const formattedDate = cash_tanggal.toISOString().split('T')[0]; 
    await this.Cash_Tanggal.fill(formattedDate);

    const formattedCashBayar = cash_bayar.toString();
    await this.Cash_Bayar.fill(formattedCashBayar);

    await this.BeliCashButton.click();
  }

  async AlertCash() {
    await this.YaPesanButton.waitFor({ state: 'visible' });
    await this.YaPesanButton.click();
    await this.page.goto('http://127.0.0.1:8000/user/motorbaru_desk');
    await expect(this.SetelahYaPesanButton).toBeVisible();
  }

  //Beli Kredit
  async BuyingMotorKredit(paket_harga_cash:number, paket_uang_muka: number, paket_nilai_cicilan: number) {
    const Paket_Kode = faker.string.numeric(4);
    const Paket_Jumlah_Cicilan = faker.string.numeric(1);
    const Paket_Bunga = faker.string.numeric(1);

    await this.formKredit.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/motorbaru_desk');
    // await this.closeForm.waitFor({ state: 'visible' });

    const formattedPaket_Harga_Cash = paket_harga_cash.toString();
    const formattedPaket_Uang_Muka = paket_uang_muka.toString();
    const formattedPaket_Nilai_Cicilan = paket_nilai_cicilan.toString();

    await this.Paket_Kode.fill(Paket_Kode);
    await this.Paket_Harga_Cash.fill(formattedPaket_Harga_Cash);
    await this.Paket_Uang_Muka.fill(formattedPaket_Uang_Muka);
    await this.Paket_Jumlah_Cicilan.fill(Paket_Jumlah_Cicilan);
    await this.Paket_Bunga.fill(Paket_Bunga);
    await this.Paket_Nilai_Cicilan.fill(formattedPaket_Nilai_Cicilan);

    await this.LanjutkanButton.click();
    // await expect(this.MenujuPopUp2).toBeVisible();
    await this.page.waitForSelector('.form-group:has-text("Id Kredit")', { timeout: 10000 });
    await expect(this.page.locator('.form-group:has-text("Id Kredit")')).toBeVisible();    
  }

  async LanjutanBuyingKredit(kridit_kode: string, pembeli_No_KTP: string, motor_kode: string, 
    kridit_tanggal: Date, fotokopi_KTP: string, fotokopi_KK: string, fotokopi_slip_gaji: string) {
    const formattedDateKredit = kridit_tanggal.toISOString().split('T')[0]; 

    await this.Kredit_Kode.fill(kridit_kode);
    await this.Pembeli_No_KTP.fill(pembeli_No_KTP);
    await this.Motor_KodeKredit.fill(motor_kode);
    await this.Kredit_Tanggal.fill(formattedDateKredit);
    await this.Fotokopi_KTP.fill(fotokopi_KTP);
    await this.Fotokopi_KK.fill(fotokopi_KK);
    await this.Fotokopi_Slip_Gaji.fill(fotokopi_slip_gaji);

    await this.PesanKreditButton.click();
  }

  async AlertKredit() {
    await this.YaPesanKredit.waitFor({ state: 'visible' });
    await this.YaPesanKredit.click();
    await this.page.goto('http://127.0.0.1:8000/user/motorbaru_desk');
    await expect(this.SetelahYaPesanKredit).toBeVisible();
  }

  //Cetak Report
  //Cash 
  async CetakCash() {
    await this.CetakLinks.Cetak.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/motorbaru_desk');
    await expect(this.cekCashCetakPDF).toBeVisible();
  }
  
  // async goToCetakCash() {
  //   await this.CetakLinks.CetakCash.click();
  //   await this.page.goto('http://127.0.0.1:8000/user/motorbaru_desk/cetakpdf', {
  //     waitUntil: 'domcontentloaded', 
  //     timeout: 60000 
  //   });
  //   await expect(this.finalCashPDF).toBeVisible();
  // }
}