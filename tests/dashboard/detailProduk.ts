import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';
import fs from 'fs';
import path from 'path';

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
  readonly Cetak: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator('button', { hasText: 'Login' });
    this.cekHeader = page.locator('h2').filter({ hasText: /Motor Baru Paling Laris/i });

    //Detail Motor
    this.cekBeliButton = page.locator('h3', { hasText: 'Detail Produk' });
    this.ButtonGroup = page.locator('.btn-group');
    this.CetakLinks = {
      Cetak: this.ButtonGroup.getByText('Cetak', { exact: true }),
      CetakCash: this.ButtonGroup.locator('a', { hasText: 'Cetak Pembelian Cash' }),
      CetakKredit: this.ButtonGroup.locator('a', { hasText: 'Cetak Pembelian Kredit' }),
    };
    this.Cetak = page.locator('a', { hasText: 'Cetak' }).filter({ has: page.locator('.fas.fa-print') });
    this.cekCashCetakPDF = page.getByLabel('Cetak').getByRole('link', { name: 'Bukti Pemesanan Motor' });
    this.finalCashPDF = page.locator('h3', { hasText: 'Detail Produk' });

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

    this.LanjutkanButton = page.getByRole('button', { name: 'Lanjutkan' });
    this.LamanKreditSelanjutnya = page.locator('div.form-footer button.payment-button.previous-step', { hasText: 'Kembali' });

    this.Kredit_Kode = page.getByLabel('Id Kredit');
    this.Pembeli_No_KTP = page.locator('#creditFormStep2 #pembeli_No_KTP');
    this.Motor_KodeKredit = page.locator('#creditFormStep2 #motor_kode');
    this.Kredit_Tanggal = page.locator('#creditFormStep2 #kridit_tanggal');
    this.Fotokopi_KTP = page.locator('#fotokopi_KTP');
    this.Fotokopi_KK = page.locator('#fotokopi_KK');
    this.Fotokopi_Slip_Gaji = page.locator('#fotokopi_slip_gaji');

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
  }

  async LanjutanBuyingKredit() {
    const { faker } = require('@faker-js/faker');

    const Kredit_Kode = faker.string.numeric(4);
    const Pembeli_No_KTP = faker.string.numeric(10);
    const Motor_KodeKredit = faker.string.numeric(4);
    const Kredit_Tanggal = faker.date.soon(30).toISOString().split('T')[0];
    const localFilePath = 'C:\\Users\\user\\Pictures\\Perahu-pic\\perahu-atas.png';
    const localFilePath_KK = 'C:\\Users\\user\\Pictures\\Perahu-pic\\perahu-bawah.png';
    const localFilePath_Gaji = 'C:\\Users\\user\\Pictures\\Perahu-pic\\perahu-belakang.png';

    await this.Kredit_Kode.fill(Kredit_Kode);
    await this.Pembeli_No_KTP.fill(Pembeli_No_KTP);
    await this.Motor_KodeKredit.fill(Motor_KodeKredit);
    await this.Kredit_Tanggal.fill(Kredit_Tanggal);

    await this.Fotokopi_KTP.waitFor({ state: 'visible' });
    await this.Fotokopi_KTP.setInputFiles(localFilePath);

    await this.Fotokopi_KK.waitFor({ state: 'visible' });
    await this.Fotokopi_KK.setInputFiles(localFilePath_KK);

    await this.Fotokopi_Slip_Gaji.waitFor({ state: 'visible' });
    await this.Fotokopi_Slip_Gaji.setInputFiles(localFilePath_Gaji);

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
    await this.Cetak.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/motorbaru_desk');
    await expect(this.finalCashPDF).toBeVisible();
  }

}