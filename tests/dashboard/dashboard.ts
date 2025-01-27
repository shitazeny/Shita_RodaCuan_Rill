import { expect, type Locator, type Page } from '@playwright/test';
import exp from 'constants';

export class PlaywrightDashboardPage {
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

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator('button', { hasText: 'Login' });
    this.cekHeader = page.locator('h2').filter({ hasText: /Motor Baru Paling Laris/i });

    //Navbar
    this.navbar = page.locator('.navbar');
    this.navbarLinks = {
      Home: this.navbar.locator('a', { hasText: 'Home' }),

      Bantuan: this.navbar.locator('a', { hasText: 'Bantuan' }),

      Beli: this.navbar.locator('a', { hasText: 'Beli' }),
      MotorBaru: this.navbar.locator('a', { hasText: 'Motor Baru' }),
      MotorBekas: this.navbar.locator('a', { hasText: 'Motor Bekas' }),
      MotorListrik: this.navbar.locator('a', { hasText: 'Motor Listrik' }),

      HaiShita: this.navbar.locator('a', { hasText: 'Hai, shita' }),
      Profile: this.navbar.locator('a', { hasText: 'Profile' }),
      Riwayat: this.navbar.locator('a', { hasText: 'Riwayat' }),
      Logout: this.navbar.locator('a', { hasText: 'Logout' }),
    };
    //Navbar Home Menu
    this.cekHomeMenu = page.locator('text=Motor Baru Paling Laris');

    //Navbar Beli Menu
    this.cekMotorBaru = page.getByLabel('Beli').getByRole('link', { name: 'Motor Baru' });
    this.cekMotorBekas = page.getByLabel('Beli').getByRole('link', { name: 'Motor Bekas' });
    this.cekMotorListrik = page.getByLabel('Beli').getByRole('link', { name: 'Motor Listrik' });

    //Navbar Bantuan Menu
    this.cekBantuan = page.getByLabel('Bantuan');

    //Navbar Hai, shita Menu
    this.cekClickProfil = page.getByLabel('Hai, shita').getByRole('link', { name: 'Profile' });
    this.cekClickRiwayat = page.getByLabel('Hai, shita').getByRole('link', { name: 'Riwayat' });
    this.cekClickLogout = page.getByLabel('Hai, shita').getByRole('link', { name: 'Logout' });

    //Navbar Beli Menu After Click
    this.cekBaruPage = page.locator('h2', { hasText: 'Motor Baru' });
    this.cekBekasPage = page.locator('h2', { hasText: 'Motor Bekas' });
    this.cekListrikPage = page.locator('h2', { hasText: 'Motor Listrik' });

    //Navbar Hai, shita Menu After Click
    this.cekProfilePage = page.locator('h2', { hasText: 'Profil Pembeli' });
    this.cekRiwayatPage = page.locator('h2', { hasText: 'Data Transaksi Cash' });
    this.cekRiwayatKreditPage = page.locator('h2', { hasText: 'Data Transaksi Kredit' });
    this.cekLoginPage = page.locator('h1', { hasText: 'Selamat Datang di RodaCuan' });
    this.ButtonRiwayatKredit = page.locator('a', { hasText: 'Data Kredit' });

    //Home
    this.potoSwipe = page.locator('.swiper');
    this.HomeHeader = page.locator('text=Motor Baru Paling Laris');
    this.motorCard = page.locator('.product', { hasText: 'Yamaha R125' });
    this.beliButton = page.locator('div.product:has-text("Yamaha R125") a:has-text("Beli")');

    //Detail Motor
    this.cekBeliButton = page.locator('h3', { hasText: 'Detail Produk' });
    this.ButtonGroup = page.locator('.btn-group');
    this.CetakLinks = {
      Cetak: page.locator('a.btn-warning:has-text("Cetak")'),
      CetakCash: page.locator('a.dropdown-item:has-text("Cetak Pembelian Cash")'),
      CetakKredit: page.locator('a.dropdown-item:has-text("Cetak Pembelian Kredit")'),
    };
    this.cekCashCetakPDF = page.getByLabel('Cetak').getByRole('link', { name: 'Cetak Pembelian Cash' });
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
    this.Paket_Kode = page.getByLabel('Id Kredit');
    this.Paket_Harga_Cash = page.getByLabel('Harga');
    this.Paket_Uang_Muka = page.getByLabel('Uang Muka');
    this.Paket_Jumlah_Cicilan = page.getByLabel('Jumlah Cicilan');
    this.Paket_Bunga = page.getByLabel('Bunga (%)');
    this.Paket_Nilai_Cicilan = page.getByLabel('Angsuran');

    this.LanjutkanButton = page.locator('button', { hasText: 'Lanjutkan' });
    this.LamanKreditSelanjutnya = page.locator('div.form-footer button.payment-button.previous-step', { hasText: 'Kembali' });

    this.Kredit_Kode = page.getByLabel('Id Kredit');
    this.Pembeli_No_KTP = page.getByLabel('Harga');
    this.Motor_KodeKredit = page.getByLabel('Id Motor');
    this.Kredit_Tanggal = page.getByLabel('Jumlah Cicilan');
    this.Fotokopi_KTP = page.getByLabel('Bunga (%)');
    this.Fotokopi_KK = page.getByLabel('Angsuran');
    this.Fotokopi_Slip_Gaji = page.getByLabel('Angsuran');

    this.PesanKreditButton = page.locator('button', { hasText: 'Pesan Kredit' });
    this.YaPesanKredit = page.locator('.swal2-confirm');
    this.SetelahYaPesanKredit = page.locator('h3', { hasText: 'Detail Produk' });
  }

  async home() {
    await expect(this.cekHeader).toBeVisible();
  }

  async checkPotoSwipe() {
    await expect(this.potoSwipe).toBeVisible();
  }

  async checkText() {
    await expect(this.HomeHeader).toBeVisible();
  }

  async checkMotorCard() {
    await expect(this.motorCard).toBeVisible();
  }

  async goToBeliMotor() {
    await this.beliButton.click();
    await expect(this.cekBeliButton).toBeVisible();
  }
}